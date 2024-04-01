import Header from "./Header/Header"
import MainActionLanding from "./MainActionLanding/MainActionLanding"
import { ModelProvider, useModelContext } from "../../context/ModelContext"
import { useState } from "react"
import { auth } from "../../config/firebase"

function MainActionPage() {
    const [displayName, setDisplayName] = useState(auth?.currentUser?.displayName)
    const [userUUID, setUserUUID] = useState(auth?.currentUser?.uid)
    const { lightTheme } = useModelContext()
    return (
        <ModelProvider value={{displayName, userUUID}}>
            <div className={`${lightTheme ? 'bg-[#e8e8e8]' : 'bg-[#151515]'} w-full min-h-screen flex flex-col items-center justify-start select-none pb-7`}>
                <Header />
                <MainActionLanding />
            </div>
        </ModelProvider>
    )
}

export default MainActionPage