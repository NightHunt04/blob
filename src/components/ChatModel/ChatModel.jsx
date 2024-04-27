import { useEffect, useState } from "react"

function ChatModel() {
    const [lightTheme, setLightTheme] = useState(false)
    useEffect(() => {
        if(localStorage.getItem('lightTheme') !== null) {
          if(localStorage.getItem('lightTheme') === 'true') {
            setLightTheme(true)
            console.log('light mode is on')
          }
        }
    }, [])

    return (
        <div className={`${lightTheme ? 'bg-[#e8e8e8] text-black' : 'bg-[#151515] text-gray-200'} relative w-full min-h-screen flex flex-col items-center justify-start select-none pb-7 overflow-hidden`}>
            <div className={`block font-inter mt-[50px] md:mt-[150px] border-[1px] ${lightTheme ? 'bg-[#ffffff] border-gray-300' : 'bg-[#272727] border-gray-700'} shadow-xl flex flex-col items-center justify-center px-5 py-4 md:px-8 md:py-7 w-9/12 overflow-y-auto md:w-[700px] rounded-lg`}>
                <p className="font-semibold text-[18px] md:text-[21px] py-2 text-left w-full"><span className="text-[#ff9e29]">Mistral 7B</span> (Default model)</p>
                <p className={`text-[16px] md:text-[17px] ${lightTheme ? 'text-gray-700' : 'text-gray-300'}`}>The Mistral 7B model, crafted by Nova Performance Paragliders, stands out as a high-performance glider favored by experienced pilots. Tailored for intermediate to advanced aviators, it offers a balance of agility, speed, and stability, making it an ideal choice for both cross-country flying and competitive endeavors. With its moderate aspect ratio and refined design, the Mistral 7B ensures precise handling and enhanced aerodynamic efficiency across a wide range of conditions. Renowned for its exceptional performance capabilities and reliability, it remains a top pick for pilots looking to push their boundaries in the skies.</p>
                <p className="pt-5 pb-3 text-[16px] md:text-[18px] font-medium">Ask some questions from the given example below : </p>
                <p className="px-3 py-2 my-2 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] bg-[#3e3e3e]">How much does the cloud weigh?</p>
                <p className="px-3 py-2 my-2 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] bg-[#3e3e3e]">How can I incorporate mindfulness into my morning routine?</p>
                <p className="px-3 py-2 my-2 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] bg-[#3e3e3e]">How can I overcome writer's block?</p>
                <p className="px-3 py-2 my-2 rounded-lg hover:cursor-pointer hover:opacity-85 text-[14px] w-full md:text-[16px] bg-[#3e3e3e]">How can I incorporate mindfulness into my morning routine?</p>
            </div>

            <div className="fixed bottom-5 rounded-lg flex items-center justify-center gap-3 px-2 py-2 shadow-lg bg-[#313131]">
                <input type="text" className="w-9/12 py-2 text-[15px] md:text-[19px] font-inter bg-transparent outline-none" placeholder="Your prompt here"/>
                <div className="flex items-center justify-center">
                    <i className="fa-solid fa-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}

export default ChatModel