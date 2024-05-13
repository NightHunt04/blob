import { useModelContext } from '../../../context/ModelContext'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function MainActionLanding() {
    const { lightTheme, toggleAddAssistantPopUp } = useModelContext()
    const navigate = useNavigate()
    // useEffect(() => {
    //     // console.log('inside the main', customAssistants)
    // }, [])

    const addAssistant = () => {
        toggleAddAssistantPopUp()
        dummy.current.scrollIntoView({ behavior: 'smooth', block : 'start' })
    }

    const dummy = useRef()

    return (
        <div className="w-full flex flex-col items-start justify-center px-[20px] lg:px-[100px] pt-5">

            <div className='mb-[75px] lg:mb-[120px] border-[1px] border-[#c51111] rounded-lg px-3 py-2 w-full lg:w-9/12 opacity-80 bg-[#000000]'>
                <span className='text-red-500 text-[13px] lg:text-[17px]'>Note:&nbsp;</span>
                <span className='text-[12px] lg:text-[16px] text-gray-300'>The APIs which are being used for fetching the responses from the below models are reverse engineered by someone else and are provided for absolutely free. So, in case if any model is not providing the expected response, then there are may occur internal server error which isn't in my hands, and for that I apologise.</span>
            </div>

            <p className='text-[13px] lg:text-[16px] font-inter text-gray-400 text-center w-full'>Click on the model you want to try.</p>

            <div className={`pt-6 lg:pt-[50px] py-2 w-full ${lightTheme ? 'text-gray-900' : 'text-gray-300'}`}>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-start justify-center'>
                    
                    <div className='row-span-3'>
                        <p className='font-inter text-[15px] lg:text-[20px] font-medium ml-3 py-2'>Models</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} flex flex-col items-center justify-center shadow-lg w-full lg:w-3/4 mb-8 border-2 ${lightTheme ? 'border-[#cecece]' : 'border-none'}`}>

                            {/* chat completion */}
                            <p className={`font-inter font-medium mb-6 text-[14px] lg:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} text-center lg:text-left w-[90%]`}>Chat completion models</p>
                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full lg:w-calc(w-3/4 - 20px) border-b-[1px] pb-4 border-gray-600'>
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('openhermes')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/openhermes.jpg" alt="OpenHermes" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>OpenHermes</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('mistral-7b')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/mistral-7b.jpeg" alt="Mistral" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Mistral 7B</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('cohere')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/cohere-logo.png" alt="Cohere" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Cohere</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('zephyr')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/zephyr-logo.png" alt="Zephyr" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Zephyr</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('gemma')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/google-logo.png" alt="Gemma" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gemma</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('phi')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/microsoft-logo.png" alt="Phi" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Phi</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('gemini')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/gemini-logo.png" alt="Gemini" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gemini</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('llama')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/llama.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>LLama</p>
                                </div>

                            </div>

                            <p className={`font-inter mb-6 font-medium text-[14px] lg:text-[17px] mt-[30px] lg:mt-[40px] px-5 py-2 w-[90%] rounded-[20px] text-center lg:text-left ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'}`}>Image generative models</p>
                            {/* image generators */}
                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full lg:w-calc(w-3/4 - 20px)'>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('pollinations')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/pollination.png" alt="Pollinations" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Pollinations</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('dalle')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/dalle.png" alt="Dall-E" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Dall-E</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('sd')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#ce9000] hover:bg-[#ce9000e4] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] lg:text-[20px] text-white'>SD</p>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] e-full text-center ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Stable Diffusion</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('sdxl')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#ce4f00] hover:bg-[#ce4f00e3] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] text-white lg:text-[20px]'>SDXL</p>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] e-full text-center ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Stable Diffusion XL</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('prodia')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#ce4f00] hover:bg-[#ce4f00e3] hover:text-gray-300 transition-all'>
                                        <img src="Assets/prodia.png" alt="prodia" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 lg:text-[16px] e-full text-center ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Prodia</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* models for fun */}
                    <div className='row-span-1'>
                        <p className='font-inter text-[15px] lg:text-[20px] font-medium ml-3 py-2'>Assistants</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} flex flex-col items-center justify-center shadow-lg w-full lg:w-3/4 mb-8 border-2 ${lightTheme ? 'border-[#cecece]' : 'border-none'}`}>
                            <p className={`font-inter font-medium mb-6 text-[14px] lg:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} w-[90%] text-center lg:text-left`}>Fine-tunned assistants</p>

                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full lg:w-calc(w-3/4 - 20px)'>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('human')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/human-logo.jpeg" alt="Human" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Human</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('mario')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/mario.jpg" alt="mario" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Super Mario</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('strange')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/strange.jpeg" alt="Dr. Stranger" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Dr. Strange</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('walter')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/walter.png" alt="Walter White" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Walter White</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row-span-1'>
                        <p className='font-inter text-[15px] lg:text-[20px] font-medium ml-3 py-2'>Reverse Engineerd GPTs (3rd Party)</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} flex flex-col items-center justify-center shadow-lg w-full lg:w-3/4 mb-8 border-2 ${lightTheme ? 'border-[#cecece]' : 'border-none'} font-inter`}>
                            <p className={`font-medium mb-6 text-[14px] lg:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} w-[90%] text-center lg:text-left`}><span className='text-[#7eb9a9]'>GPT</span> models</p>
                            
                            <p className='text-[13px] lg:text-[16px] p-2 pb-5'><span className='font-bold'>Note:&nbsp;</span>These models may act unusual sometimes</p>

                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full lg:w-calc(w-3/4 - 20px)'>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chatgpt-3.5-turbo')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gpt-3.5-turbo</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chatgpt-3')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gpt-3</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chatgpt-curie')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Curie</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chatgpt-davinci')}>
                                    <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 lg:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Davinci</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='row-span-1'>
                        <p className='font-inter text-[15px] lg:text-[20px] font-medium ml-3 py-2'>Check the bot on <span className='text-[#24A1DE]'>telegram!</span></p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} flex items-center justify-center shadow-lg w-full lg:w-3/4 mb-8 border-2 ${lightTheme ? 'border-[#cecece]' : 'border-none'} font-inter`}>
                            <img src="Assets/pngwing.png" alt="telegram" className='animate-tele w-[100px] relative lg:w-[180px] object-cover'/>
                            <Link className='rounded-2xl text-[15px] lg:text-[17px] bg-[#1e1e1e] px-4 py-2 hover:opacity-80' to='https://t.me/modelmatebot' target='__blank'>Redirect to telegram bot? Click me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainActionLanding