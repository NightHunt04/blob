import { Link } from "react-router-dom"
import { useModelContext } from "../../context/ModelContext"

function Settings() {
    const { lightTheme, settings } = useModelContext()
    const { toggleLogoutPopUp } = useModelContext()

    return (
        <div className={`setting ${settings ? 'w-[300px] xl:w-[400px]' : 'w-0'} ${lightTheme ? 'text-[#343434] bg-[#cecece]' : 'text-[#e6e6e6] bg-[#363636]'} font-inter text-[15px] xl:text-[18px] overflow-hidden absolute transition-all shadow-2xl h-screen right-0 top-0 z-20 rounded-bl-xl`}>
            <div className={`flex transition-all relative flex-col items-center justify-start w-full h-full pt-[80px] xl:pt-[120px]`}>
                <div className="relative text-[13px] xl:text-[16px] text-center">
                    <Link to='APIReference'>
                        <p className={`px-5 py-2 rounded-xl ${lightTheme ? 'hover:bg-[#272727] hover:text-white' : 'hover:bg-[#272727]'} mb-9 transition-all`}>API References</p>
                    </Link>

                    <Link to='about'>
                        <p className={`px-5 py-2 rounded-xl ${lightTheme ? 'hover:bg-[#272727] hover:text-white' : 'hover:bg-[#272727]'} mb-9`}>About</p>
                    </Link>
                </div>
                <button className="absolute text-[14px] xl:text-[16px] px-4 py-1 xl:px-5 xl:py-2 bg-[#a40e00e7] shadow-2xl hover:bg-[#820000] bottom-[80px] xl:bottom-10 text-white rounded-[30px]" onClick={toggleLogoutPopUp}>Logout &nbsp;<i className="fa-solid fa-arrow-right-from-bracket text-gray-200"></i></button>
            </div>
        </div>
    )
}

export default Settings