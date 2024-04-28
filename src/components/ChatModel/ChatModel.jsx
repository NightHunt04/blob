import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

function ChatModel() {
    const location = useLocation()
    const { modelName, modelDescription, modelImage } = location.state || {};
    const [lightTheme, setLightTheme] = useState(false)
    useEffect(() => {
        if(localStorage.getItem('lightTheme') !== null) {
          if(localStorage.getItem('lightTheme') === 'true') {
            setLightTheme(true)
            console.log('light mode is on')
          }
        }
        console.log(modelName, modelDescription, modelImage)
    }, [])

    return (
        <div className={`${lightTheme ? 'bg-[#e8e8e8] text-black' : 'bg-[#151515] text-gray-200'} relative w-full min-h-screen flex flex-col items-center justify-start select-none pb-7 overflow-hidden`}>
            <div className={`block font-inter mt-[50px] md:mt-[150px] border-[1px] ${lightTheme ? 'bg-[#ffffff] border-gray-300' : 'bg-[#272727] border-gray-700'} shadow-xl flex flex-col items-center justify-center px-5 py-4 mb-[190px] md:px-8 md:py-7 w-9/12 md:w-[700px] rounded-lg`}>
                <img src={modelImage} alt="Mistral" className="w-[50px] h-[50px] rounded-lg mb-2"/>
                <p className="font-semibold text-[18px] md:text-[21px] py-2 text-left w-full"><span className="text-[#ff9e29]">{modelName}</span> (Default model)</p>
                <p className={`text-[15px] w-full text-left md:text-[17px] ${lightTheme ? 'text-gray-700' : 'text-gray-300'}`}>{modelDescription}</p>
                <p className="pt-8 pb-3 text-[16px] md:text-[18px] font-medium">Ask some questions from the given example below : </p>
                <p className={`px-3 py-2 my-2 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] ${lightTheme ? 'bg-[#e6e6e6]' : 'bg-[#3e3e3e]'}`}>How much does the cloud weigh?</p>
                <p className={`px-3 py-2 my-2 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] ${lightTheme ? 'bg-[#e6e6e6]' : 'bg-[#3e3e3e]'}`}>How can I incorporate mindfulness into my morning routine?</p>
                <p className={`px-3 py-2 my-2 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] ${lightTheme ? 'bg-[#e6e6e6]' : 'bg-[#3e3e3e]'}`}>How can I overcome writer's block?</p>
                <p className={`px-3 py-2 my-2 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] ${lightTheme ? 'bg-[#e6e6e6]' : 'bg-[#3e3e3e]'}`}>How can I incorporate mindfulness into my morning routine?</p>
            </div>

            <div className={`fixed bottom-5 border-[1px] rounded-lg flex items-center justify-center gap-3 px-2 py-2 w-[90%] md:w-[720px] shadow-lg ${lightTheme ? 'bg-[#f4f4f4] border-gray-200' : 'bg-[#1b1b1b] border-gray-500'}`}>
                <input type="text" className="w-full md:w-[700px] md:px-4 py-1 text-[15px] md:text-[18px] font-inter bg-transparent outline-none" placeholder="Your prompt here"/>
                <div className="flex items-center justify-center">
                    <i className="fa-solid fa-paper-plane px-3 md:px-4 hover:opacity-60 hover:cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default ChatModel