import { useModelContext } from "../../context/ModelContext"
import Header from "./Header/Header"
import MainActionLanding from "./MainActionLanding/MainActionLanding"

function MainActionPage() {
    const { lightTheme } = useModelContext()

    return (
        <div className={`${lightTheme ? 'bg-[#e8e8e8]' : 'bg-[#151515]'} w-full min-h-screen flex flex-col items-center justify-start select-none pb-7`}>
            <Header />
            <MainActionLanding />
        </div>
    )
}

export default MainActionPage