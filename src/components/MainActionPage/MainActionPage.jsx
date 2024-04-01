import Header from "./Header/Header"
import MainActionLanding from "./MainActionLanding/MainActionLanding"
import { ModelProvider, useModelContext } from "../../context/ModelContext"
import { useEffect, useState } from "react"
import { auth } from "../../config/firebase"

function MainActionPage() {
    const [displayName, setDisplayName] = useState(auth?.currentUser?.displayName)
    const [userUUID, setUserUUID] = useState(auth?.currentUser?.uid)
    const [lightTheme, setLightTheme] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('lightTheme') !== null) {
          if(localStorage.getItem('lightTheme') === 'true') {
            setLightTheme(true)
            console.log('light mode is on')
          }
          // else {
          //   setLightTheme(false)
          //   console.log('dark mode is on')
          // }
        }
      }, [])
    
      const toggleLightTheme = () => {
        if(lightTheme) localStorage.setItem('lightTheme', false)
        else localStorage.setItem('lightTheme', true)
        setLightTheme(prev => !prev)
      }

    return (
        <ModelProvider value={{displayName, userUUID, lightTheme, toggleLightTheme}}>
            <div className={`${lightTheme ? 'bg-[#e8e8e8]' : 'bg-[#151515]'} w-full min-h-screen flex flex-col items-center justify-start select-none pb-7`}>
                <Header />
                <MainActionLanding />
            </div>
        </ModelProvider>
    )
}

export default MainActionPage