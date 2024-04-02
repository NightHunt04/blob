import { useModelContext } from "../../context/ModelContext"

function Settings() {
    const { lightTheme, settings } = useModelContext()

    return (
        <div className={`setting ${settings ? 'w-[300px] md:w-[400px]' : 'w-0'} ${lightTheme ? 'text-[#343434] bg-[#cecece]' : 'text-[#e6e6e6] bg-[#363636]'} font-inter text-[19px] overflow-hidden absolute transition-all shadow-2xl h-screen right-0 top-0 z-20`}>
            <div className={`flex transition-all relative flex-col items-center justify-center w-full pt-[80px] md:pt-[120px]`}>
                this is 
            </div>
        </div>
    )
}

export default Settings