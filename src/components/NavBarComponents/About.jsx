import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function About() {
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
                    <p className="font-medium text-[15px] lg:text-[19px]">About</p>
                    <div className="w-full text-left pt-3 px-2 lg:px-4">
                        <p className="p-1 text-[15px] lg:text-[17px]">The rapid growth of artificial intelligence (AI) is changing how we live and work. AI is used in many areas, like healthcare, finance, education, and entertainment, to make things more efficient and accurate. In healthcare, AI helps diagnose diseases and predict patient outcomes. In finance, it improves trading and detects fraud. Education benefits from personalized learning with AI, and entertainment sees smart content recommendations and virtual reality experiences. As AI advances, it works alongside humans, enhancing our abilities and leading to new innovations and opportunities.</p>
                        <p className="p-1 text-[15px] lg:text-[17px] mt-2">This project (ModelMate) is a platform where multiple different LLM models along with the image generative models can be used as a space. The models are completely free as some of these models are reverse engineered by someone else and thus there may not be any gauranteed that any of the model may not work by tomorrow. There must not be any misuse of this project as the resources are precious and should be used effectively.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About