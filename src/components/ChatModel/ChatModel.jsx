import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import useGenerateImage from "../../utils/useGenerateImage"
import useFetchImage from "../../utils/useFetchImage"
import useGenPollinationsImg from "../../utils/useGenPollinationsImg"
import useGenStableDiffusion from "../../utils/useGenStableDiffusion"
import useGenProdia from "../../utils/useGenProdia"
import useQwertyModelNonTunned from "../../utils/useQwertyModelNonTunned"
import uuid from 'react-uuid'
import useHuggingFaceModels from "../../utils/useHugginFaceModels"
import useGeminiChatModel from "../../utils/useGeminiChatModel"
import './style.css'
import useHumanGen from "../../utils/useHumanGen"
import useGPT from "../../utils/useGPT"


function ChatModel({modelName, modelDescription, modelImage, modelTitleColor, isImageGenerator, showcaseImages=null}) {
    const [hideDescription, setHideDescription] = useState(false)
    const [prompt, setPrompt] = useState('')
    const [prevPrompt, setPrevPrompt] = useState(prompt)
    const [isDisabled, setIsDisabled] = useState(false)
    const [imageURL, setImageURL] = useState('')
    const [isServerError, setIsServerError] = useState(false)
    const [messages, setMessages] = useState([])
    const dummy = useRef()

    let isRegenerate = false
    const profilePhotoURL = localStorage.getItem('currentUserProfileURL')
    let prevPromptNonState = ''

    const navigate = useNavigate()
    const [lightTheme, setLightTheme] = useState(false)


    useEffect(() => {
        if(localStorage.getItem('lightTheme') !== null) {
          if(localStorage.getItem('lightTheme') === 'true') {
            setLightTheme(true)
          }
        }
    }, [])

    // to fetch the generated image
    const fetchImage = async(task_id, request_id) => {
        const response = await useFetchImage({ taskId: task_id, requestId: request_id })

        if(response.status === 1) {
            setImageURL(response.imageURL)
            
            if(isRegenerate)
                isRegenerate = false
        }

        else setIsServerError(true)
    }

    // to generate the image
    const generateImage = async(model_id) => {
        const response = await useGenerateImage({ prompt: prevPromptNonState, model_id: model_id })
        let task_id = response.task_id
        let request_id = response.request_id

        fetchImage(task_id, request_id)
    }

    // to generate pollinations image
    const generatePollinationsImage = async() => {
        const response = await useGenPollinationsImg({ prompt : prevPromptNonState })

        if(response !== 'ERROR')
            setImageURL(response)
        else setIsServerError(true)
    }

    // to generate sd images from nexra's api
    const generateStableDiff = async() => {
        const response = await useGenStableDiffusion({ prompt : prevPromptNonState })
        if(response === 'ERROR')
            setIsServerError(true)
        else
            setImageURL(response)
    }

    const delay = async (ms) => {
        return new Promise((resolve) => 
            setTimeout(resolve, ms));
    }

    let startAnimation = false
    const loadingAnimation = async(newUuid) => {
        let loader = ''
        while(startAnimation) {
            setMessages(prev => prev.map(message => message.uuid === newUuid ? { ...message, text: loader} : message) )
            loader += '❚ '

            if(loader == '❚ ❚ ')
                loader = ''
            await delay(1000)
        }
    }

    // call the qwerty chat completion model
    const callQwertyModel = async(prompt, modelId, newUuid) => {
        const response = await useQwertyModelNonTunned({ prompt : prompt, modelId : modelId })

        if(response.code === 2) {
            startAnimation = false
            const respondedText = response.text
            let text = ''
            const modifiedText = separateTheCode(respondedText)

            for(let i = 0; i < modifiedText.length; i++) {
                text += modifiedText[i]
                setMessages(prev => prev.map(message => message.uuid === newUuid ? { ...message, text: text} : message) )
                await delay(2)
                dummy.current.scrollIntoView({ behavior: 'smooth', block : 'start'  })
            }
        }
    }

    // to generate prodia images from nexra's api
    const generateProdia = async() => {
        const response = await useGenProdia({ prompt : prevPromptNonState})
        if(response === 'ERROR')
            setIsServerError(true)
        else
            setImageURL(response)
    }

    const callGeminiChatModel = async(prompt, newUuid) => {
        const response = await useGeminiChatModel({ prompt : prompt})

        if(response.code === 2 ) {
            startAnimation = false
            let respondedText = response.response
            let text = ''
            let filteredRespondedText = ''
            let k = 0
            let end = false
            while(k < respondedText.length) {
                if(k < respondedText.length - 1 && respondedText[k] === '*' && respondedText[k + 1] === '*') {
                    if(end) {
                        filteredRespondedText += '</b>'
                        end = false
                    } else {
                        filteredRespondedText += '<b>'
                        end = true
                    }
                    k += 2
                } else if(k < respondedText.length - 1 && respondedText[k] === '*' && respondedText[k + 1] !== '*') {
                    k += 1
                } else {
                    filteredRespondedText += respondedText[k]
                    k += 1
                }
            }

            const modifiedText = separateTheCode(filteredRespondedText)

            for(let i = 0; i < modifiedText.length; i++) {
                text += modifiedText[i]
                setMessages(prev => prev.map(message => message.uuid === newUuid ? { ...message, text: text} : message) )
                await delay(2)
                dummy.current.scrollIntoView({ behavior: 'smooth', block : 'start'  })
            }
        }
    }

    const separateTheCode = (respondedText) => {
        let modifiedText = ''
            let end = false
            for (let i = 0; i < respondedText.length; i++) {
                if (i < respondedText.length - 2) {
                    if (respondedText.slice(i, i + 3) === '```' && !end) {
                        modifiedText += '<p class="code">'
                        end = true
                        i += 2   
                    } else if (respondedText.slice(i, i + 3) === '```' && end) {
                        modifiedText += '</p>'
                        end = false
                        i += 2
                    } else {
                        modifiedText += respondedText[i]
                    }
                    } else {
                    modifiedText += respondedText[i]
                }
            }
        return modifiedText
    }

    // call admin's api
    const callAdminHugFaceModels = async(prompt, model, newUuid) => {
        const response = await useHuggingFaceModels({ prompt : prompt, model : model })

        if(response.status === 200) {
            startAnimation = false
            const respondedText = response.data.response
            
            let filteredRespondedText = ''
            let k = 0
            let end = false
            while(k < respondedText.length) {
                if(k < respondedText.length - 1 && respondedText[k] === '*' && respondedText[k + 1] === '*') {
                    if(end) {
                        filteredRespondedText += '</b>'
                        end = false
                    } else {
                        filteredRespondedText += '<b>'
                        end = true
                    }
                    k += 2
                } else if(k < respondedText.length - 1 && respondedText[k] === '*' && respondedText[k + 1] !== '*') {
                    k += 1
                } else {
                    filteredRespondedText += respondedText[k]
                    k += 1
                }
            }

            const modifiedText = separateTheCode(filteredRespondedText)

            let text = ''

            for(let i = 0; i < modifiedText.length; i++) {
                text += modifiedText[i]
                setMessages(prev => prev.map(message => message.uuid === newUuid ? { ...message, text: text} : message) )
                await delay(2)
                dummy.current.scrollIntoView({ behavior: 'smooth', block : 'start'  })
            }
        }
    }

    const callHuman = async(prevPromptNonState, newUuid) => {
        const response = await useHumanGen({ prompt : prevPromptNonState, id: 0})

        if(response.code === 2) {
            startAnimation = false
            const respondedText = response.content
            let text = ''
            const modifiedText = separateTheCode(respondedText)

            for(let i = 0; i < modifiedText.length; i++) {
                text += modifiedText[i]
                setMessages(prev => prev.map(message => message.uuid === newUuid ? { ...message, text: text} : message) )
                await delay(2)
                dummy.current.scrollIntoView({ behavior: 'smooth', block : 'start'  })
            }
        }
    }

    const callGPT = async(prevPromptNonState, model, newUuid) => {
        const response = await useGPT({ prompt: prevPromptNonState, model: model})

        startAnimation = false
        let text = ''
        const modifiedText = separateTheCode(response)

        for(let i = 0; i < modifiedText.length; i++) {
            text += modifiedText[i]
            setMessages(prev => prev.map(message => message.uuid === newUuid ? { ...message, text: text} : message) )
            await delay(2)
            dummy.current.scrollIntoView({ behavior: 'smooth', block : 'start'  })
        }
    }

    const setupMessage = (prevPromptNonState, modelId=null) => {
        const newUuid = uuid()
            const message = {
                isSentFromUser : true,
                text : prevPromptNonState,
                profilePicture : profilePhotoURL,
                uuid : newUuid
            }

            setMessages(prev => [...prev, message])

            dummy.current.scrollIntoView({ behavior: 'smooth', block : 'start' })

            const newUuid2 = uuid()
            const messageV2 = {
                isSentFromUser : false,
                text : '',
                profilePicture : modelImage,
                uuid : newUuid2
            }
            setMessages(prev => [...prev, messageV2])
            startAnimation = true
            loadingAnimation(newUuid2)

            if(modelName === 'OpenHermes' || modelName === 'LLama') 
                callQwertyModel(prevPromptNonState, modelId, newUuid2)

            else if(modelName === 'Mistral 7B' || modelName === 'Coral' || modelName === 'Zephyr' || modelName === 'Gemma' || modelName == 'Phi')
                callAdminHugFaceModels(prevPromptNonState, modelId, newUuid2)

            else if(modelName === 'Gemini')
                callGeminiChatModel(prevPromptNonState, newUuid2)
            
            else if(modelName === 'Human')
                callHuman(prevPromptNonState, newUuid2)

            else if(modelName === 'GPT-3.5-Turbo' || modelName === 'GPT-3' || modelName === 'Curie' || modelName === 'Davinci') 
                callGPT(prevPromptNonState, modelId, newUuid2)
    }

    const handleRequest = (defaultQuestion=false, question) => {
        setHideDescription(true)
        setIsDisabled(true)
        setIsServerError(false)

        if(defaultQuestion) {
            prevPromptNonState = question
            console.log(question)
            localStorage.setItem('prevPrompt', prevPromptNonState)
        }

        if(!isRegenerate) {
            prevPromptNonState = prompt
            localStorage.setItem('prevPrompt', prevPromptNonState)
            setPrevPrompt(prompt)
            setPrompt('')
        }
        
        prevPromptNonState = localStorage.getItem('prevPrompt')
        
        setIsDisabled(true)
        setImageURL('')

        if(modelName === 'Dall-E') 
            generateImage(33) // model id for dalle

        else if(modelName === 'SDXL')
            generateImage(10) // model id for sdxl
    
        else if(modelName === 'SD') 
            generateStableDiff()

        else if(modelName === 'Pollinations') 
            generatePollinationsImage()

        else if(modelName === 'Prodia')
            generateProdia()

        else if(modelName === 'OpenHermes' || modelName === 'LLama') {
            let modelId = '-1'
            switch(modelName) {
                case 'OpenHermes': 
                    modelId = '27'
                    break
                
                case 'LLama':
                    modelId = '18'
                    break
            }
            setupMessage(prevPromptNonState, modelId)
        }

        else if(modelName === 'Mistral 7B' || modelName === 'Coral' || modelName === 'Zephyr' || modelName === 'Gemma' || modelName === 'Phi') {
            let modelId = '-1'
            switch(modelName) {
                case 'Mistral 7B':
                    modelId = '6'
                    break

                case 'Coral':
                    modelId = '0'
                    break

                case 'Zephyr':
                    modelId = '2'
                    break

                case 'Gemma':
                    modelId = '5'
                    break
                
                case 'Phi':
                    modelId = '7'
                    break
            }            
            setupMessage(prevPromptNonState, modelId)
        }

        else if(modelName === 'Gemini' || modelName === 'Human') 
            setupMessage(prevPromptNonState)

        else if(modelName === 'GPT-3.5-Turbo' || modelName === 'GPT-3' || modelName === 'Curie' || modelName === 'Davinci') {
            let model = ''
            switch(modelName) {
                case 'GPT-3.5-Turbo':
                    model = 'gpt-3.5-turbo'
                    break
                
                case 'GPT-3':
                    model = 'gpt-3'
                    break
                
                case 'Curie':
                    model = 'curie'
                    break

                case 'Davinci':
                    model = 'davinci'
                    break
            }

            setupMessage(prevPromptNonState, model)
        }

        setIsDisabled(false)
    }

    return (
        <div className={`${lightTheme ? 'bg-[#e8e8e8] text-black' : 'bg-[#151515] text-gray-200'} relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden`}>
            
            {/* back button */}
            <div className={`fixed px-2 py-1 md:px-4 md:py-2 -left-[1500px] top-[20px] md:left-[80px] md:top-[60px] hover:cursor-pointer hover:opacity-80 rounded-lg ${lightTheme ? 'bg-[#ffffff] shadow-lg' : 'bg-[#333333]'}`} onClick={() => navigate(-1)}>
                <i className="fa-solid fa-arrow-left text-[16px]"></i>
            </div>
            {/* section for image generators */}
            <div className={`${hideDescription && isImageGenerator ? 'flex flex-col' : 'hidden'} pt-[100px] w-[90%] md:w-9/12 items-center justify-center`}>
                
                {/* user's prompt along with user's google profile picture */}
                <div className="flex items-start justify-start w-[95%] md:w-6/12 pb-7 gap-3">
                    <img src={profilePhotoURL} alt="profile" className="w-[20px] h-[20px] md:w-[27px] md:h-[27px] flex items-center justify-center rounded-full object-cover" />
                    <p className="font-inter text-[15px] md:text-[19px]">{prevPrompt}</p>
                </div>

                {
                    imageURL === '' && isImageGenerator && !isServerError ? 
                    <div className="relative w-full flex flex-col items-center justify-center">
                        <img src="https://i.gifer.com/origin/3c/3c82e43002a5c632edebf76eadc6499a_w200.webp" alt="waiting" className="rounded-lg w-[90%] md:w-[40%] object-cover"/>
                        <p className="absolute text-[14px] text-gray-400 md:text-[17px] font-inter -bottom-8 md:bottom-[30px]">Wait for a while, generating your image...</p>
                    </div>
                    :
                    <img src={imageURL} alt='try again' className={`${isImageGenerator ? 'flex' : 'hidden' } rounded-lg w-[95%] md:w-[40%] object-cover`} />
                }

                {/* internal server indicator */}
                <div className={`${isServerError ? 'flex' : 'hidden'} rounded-lg p-4 flex-col items-center justify-center shadow-md w-[95%] md:w-[40%] ${lightTheme ? 'bg-white' : 'bg-[#282828]'}`}>
                    <p className="bg-red-600 font-inter rounded-lg px-2 py-1 md:px-3 md:py-2 font-medium text-white text-[13px] md:text-[15px]">Internal server error!</p>
                    <img src="https://i.imgflip.com/f0pti.jpg" alt="internal server error" className="my-5 rounded-lg w-full object-cover"/>
                    <p className="font-inter text-[14px] w-full text-center md:text-[17px] ">Please, try again by re-writing your prompt! Or if it's not responding then try again later.</p>
                </div>
                {/* re-generate button */}
                <button 
                    className={`${imageURL !== '' && isImageGenerator ? 'flex' : 'hidden'} gap-1 px-2 py-1 md:px-3 md:py-2 ${lightTheme ? 'bg-white' : 'bg-[#343434]'} items-center justify-center text-[13px] md:text-[15px] font-inter font-medium border-[1px] border-gray-500 shadow-md hover:opacity-80 mt-5 rounded-lg`} 
                    onClick={() => {
                        isRegenerate = true
                        handleRequest()
                    }}>
                        Re-generate 
                    <i className="fa-solid fa-arrows-rotate text-[11px] md:text-[13px]"></i>
                </button>
                
                <div className={`${isImageGenerator ? 'fixed' : 'hidden'} px-3 py-2 bottom-[100px] rounded-lg mt-[140px] w-9/12 md:w-[550px] ${lightTheme ? 'bg-[#ffffff]' : 'bg-[#343434]'}`}>
                    <p className="font-inter text-[14px] md:text-[17px]"><span className="text-red-500 font-medium">Note:&nbsp;</span>You may need to turn off the ad-blockers for this one to get the images.</p>
                </div>
            </div> 

            {/* chat completion section */}
            <div className={`${hideDescription && !isImageGenerator ? 'flex flex-col' : 'hidden'} pt-[50px] md:pt-[100px] pb-[90px] md:pb-[150px] w-[93%] md:w-9/12 max-h-[80%] overflow-hidden items-center justify-center`} >
                
                {
                    messages.map(message => {
                        return (
                            <div key={message.uuid} className={`${!message.isSentFromUser ? 'mb-[30px] md:mb-[45px]' : ''} flex items-start justify-start w-[95%] md:w-6/12 pb-4 md:pb-7 gap-3`} >
                                <img src={message.profilePicture} alt="profile" className="w-[20px] h-[20px] md:w-[27px] md:h-[27px] flex items-center justify-center rounded-full object-cover" />
                                <p className={`font-inter text-[15px] w-[90%] md:text-[19px] whitespace-pre-wrap`} dangerouslySetInnerHTML={{__html: message.text}}></p>
                            </div>
                        )
                    })
                }
                <div ref={dummy} className="h-[30px]"></div>

            </div>

            
            {/* description box before any prompts fired by user */}
            <div className={`${hideDescription ? 'hidden' : 'block'} font-inter mt-[50px] md:mt-[100px] border-[1px] ${lightTheme ? 'bg-[#ffffff] border-gray-300' : 'bg-[#272727] border-gray-700'} shadow-xl flex flex-col items-center justify-center px-5 py-4 mb-[190px] md:px-8 md:py-7 w-9/12 md:w-[700px] rounded-lg`}>
                <img src={modelImage} alt="Mistral" className={`${modelImage !== '0' ? 'flex' : 'hidden'} w-[50px] h-[50px] rounded-lg mb-2`}/>
                <p className={`font-semibold text-[18px] md:text-[23px] py-2 text-left w-full ${modelTitleColor}`}>{modelName}</p>
                <p className={`text-[14px] w-full text-left md:text-[17px] ${lightTheme ? 'text-gray-700' : 'text-gray-300'}`}>{modelDescription}</p>

                {
                    !isImageGenerator ? 
                    <div className="w-full">
                        <p className="pt-8 pb-3 text-[16px] md:text-[18px] font-medium">Ask some questions from the given example below : </p>
                        <p className={`px-3 py-2 my-3 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] ${lightTheme ? 'bg-[#e6e6e6]' : 'bg-[#3e3e3e]'}`} onClick={() => {
                                                                                                                                                                                        handleRequest(true, 'How much does the cloud weigh?')
                                                                                                                                                                                        }}>How much does the cloud weigh?</p>
                        <p className={`px-3 py-2 my-3 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] ${lightTheme ? 'bg-[#e6e6e6]' : 'bg-[#3e3e3e]'}`}>How can I incorporate mindfulness into my morning routine?</p>
                        <p className={`px-3 py-2 my-3 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] ${lightTheme ? 'bg-[#e6e6e6]' : 'bg-[#3e3e3e]'}`}>How can I overcome writer's block?</p>
                        <p className={`px-3 py-2 my-3 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] ${lightTheme ? 'bg-[#e6e6e6]' : 'bg-[#3e3e3e]'}`}>How can I incorporate mindfulness into my morning routine?</p>
                    </div>
                    :
                    <div className="w-full">
                        <p className="pt-8 pb-3 text-[16px] md:text-[18px] font-medium">Some of the images generated by {modelName}:</p>
                        <img src={showcaseImages} alt="dalle" className="rounded-lg w-full overflow-hidden"/>
                    </div>
                }
            </div>

            {/* input section - input field, send button */}
            <div className={`fixed bottom-5 border-[1px] rounded-lg flex items-center justify-center gap-3 px-2 py-2 w-[90%] md:w-[720px] shadow-lg ${lightTheme ? 'bg-[#ffffff] border-gray-200' : 'bg-[#1b1b1b] border-gray-500'}`}>
                <input 
                    type="text" 
                    value={prompt} 
                    onChange={e => setPrompt(e.target.value)} 
                    className="w-full md:w-[700px] md:px-4 py-1 text-[15px] md:text-[18px] font-inter bg-transparent outline-none" 
                    placeholder="Your prompt here"
                    disabled={isDisabled}
                    onKeyDown={e => {
                        if(e.key === 'Enter') 
                            handleRequest()  
                    }}/>
                <div className="flex items-center justify-center" onClick={handleRequest}>
                    <i className="fa-solid fa-paper-plane px-3 md:px-4 hover:opacity-60 hover:cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default ChatModel