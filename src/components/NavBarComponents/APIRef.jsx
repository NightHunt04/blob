import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function APIRef() {
    const [lightTheme, setLightTheme] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('lightTheme') !== null) {
          if(localStorage.getItem('lightTheme') === 'true') {
            setLightTheme(true)
          }
        }
    }, [])

    return (
        <div className={`${lightTheme ? 'bg-[#e8e8e8] text-black' : 'bg-[#151515] text-gray-200'} relative w-full min-h-screen flex flex-col items-center font-inter justify-start overflow-hidden pb-6`}>
            {/* back button */}
            <div className={`fixed px-2 py-1 md:px-4 md:py-2 -left-[1500px] top-[20px] md:left-[80px] md:top-[60px] hover:cursor-pointer hover:opacity-80 rounded-lg ${lightTheme ? 'bg-[#ffffff] shadow-lg' : 'bg-[#333333]'}`} onClick={() => navigate(-1)}>
                <i className="fa-solid fa-arrow-left text-[16px]"></i>
            </div>

            <div className={'flex flex-col w-[90%] md:w-9/12 items-center pt-[80px] lg:pt-[100px] justify-center'}>
                <div className={`w-[97%] rounded-xl lg:text-[16px] flex flex-col items-center justify-center ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} p-4`}>
                    <p className="font-medium text-[15px] lg:text-[18px]">API References</p>
                    <div className="w-full text-left pt-3 px-4">
                        <p className="text-[15px] lg:text-[17px]">Links for the APIs used in this project are given below <span className="text-[#ff2e2e]">(click on the below text to redirect to the API link) </span>: </p>
                        <div className="flex text-left w-full gap-3 pt-4">
                            <p>1)</p>
                            <Link to='https://rapidapi.com/qewertyyirl/api/models3/' className="hover:opacity-70 text-[15px] lg:text-[16px]" target="__blank">Rapid API :  models By qewertyy</Link>
                        </div>
                        <div className="flex text-left w-full gap-3 pt-4">
                            <p>2)</p>
                            <Link to='https://nexra.aryahcr.cc/' className="hover:opacity-70 text-[15px] lg:text-[16px]" target="__blank">Nexra API</Link>
                        </div>
                        <div className="flex text-left w-full gap-3 pt-4">
                            <p>3)</p>
                            <Link to='https://github.com/Soulter/hugging-chat-api' className="hover:opacity-70 text-[15px] lg:text-[16px]" target="__blank">Reverse engineered Hugging Chat API </Link>
                        </div>
                        <div className="flex text-left w-full gap-3 pt-4">
                            <p>4)</p>
                            <Link to='https://github.com/python-telegram-bot/python-telegram-bot' className="hover:opacity-70 text-[15px] lg:text-[16px]" target="__blank">API for telegram bot</Link>
                        </div>
                    </div>
                </div>

                <div className={`w-[97%] rounded-xl text-[15px] lg:text-[17px] flex flex-col items-center justify-center ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} p-4 mt-2 pb-6 lg:mt-5`}>
                    <div className="w-full text-left pt-3 px-4">
                        <p><span className="text-[#ff2e2e]">Note:&nbsp;</span>The above given APIs are handled and managed by others and there is no gauranteed that these APIs will work without any concern. There may or may not come any issues which are completely relied on the services or the servers.</p>
                    </div>
                </div>

                <div className={`w-[97%] rounded-xl text-[15px] lg:text-[17px] flex flex-col items-center justify-center ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} p-4 mt-[50px] lg:mt-[100px]`}>
                    <p className="font-medium text-[15px] lg:text-[18px]">Other <span className="text-[#0065bd]">Github</span> repositories for AI API wrappers</p>
                    <p className="text-[#ff2e2e] text-left w-full">Click on the below text to redirect to it's github repo: </p>

                    <div className="px-4 w-full text-left">
                        <div className="flex text-left w-full gap-3 pt-4">
                            <p>1)</p>
                            <Link to='https://github.com/yandricr/gpti-py' className="hover:opacity-70 text-[15px] lg:text-[16px]" target="__blank">yandricr : gpti-py</Link>
                        </div>
                        <div className="flex text-left w-full gap-3 pt-4">
                            <p>2)</p>
                            <Link to='https://github.com/Ruu3f/freeGPT' className="hover:opacity-70 text-[15px] lg:text-[16px]" target="__blank">Ruuf3 : freeGPT</Link>
                        </div>
                        <div className="flex text-left w-full gap-3 pt-4">
                            <p>3)</p>
                            <Link to='https://github.com/xtekky/gpt4free' className="hover:opacity-70 text-[15px] lg:text-[16px]" target="__blank">xtekky : gpt4free</Link>
                        </div>
                        <div className="flex text-left w-full gap-3 pt-4">
                            <p>4)</p>
                            <Link to='https://github.com/Qewertyy/LexicaAPI' className="hover:opacity-70 text-[15px] lg:text-[16px]" target="__blank">Qewertyy : LexicaAPI</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default APIRef