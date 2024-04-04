import { useModelContext } from "../../context/ModelContext"

function Settings() {
    const { lightTheme, settings } = useModelContext()
    const { toggleLogoutPopUp } = useModelContext()

    return (
        <div className={`setting ${settings ? 'w-[300px] md:w-[400px]' : 'w-0'} ${lightTheme ? 'text-[#343434] bg-[#cecece]' : 'text-[#e6e6e6] bg-[#363636]'} font-inter text-[19px] overflow-hidden absolute transition-all shadow-2xl h-screen right-0 top-0 z-20`}>
            <div className={`flex transition-all relative flex-col items-center justify-center w-full h-full pt-[80px] md:pt-[120px]`}>
                <button className="absolute text-[14px] md:text-[16px] px-4 py-1 md:px-5 md:py-2 bg-[#a40e00e7] shadow-2xl hover:bg-[#820000] bottom-[70px] md:bottom-10 text-white rounded-[30px]" onClick={toggleLogoutPopUp}>Logout &nbsp;<i className="fa-solid fa-arrow-right-from-bracket text-gray-200"></i></button>
            </div>
        </div>
    )
}

export default Settings