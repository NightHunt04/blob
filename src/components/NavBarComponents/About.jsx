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
                    <p className="font-medium text-[15px] lg:text-[18px]">About</p>
                </div>
            </div>
        </div>
    )
}

export default About