import Header from "./Header/Header"
import MainActionLanding from "./MainActionLanding/MainActionLanding"
import { ModelProvider } from "../../context/ModelContext"
import { useEffect, useState } from "react"
import Settings from "../Settings/Settings"
import LogoutPopUp from "../LogoutPopUp/LogoutPopUp"
import { db } from "../../config/firebase"
import { getDoc, doc, setDoc } from "firebase/firestore"

function MainActionPage() {
    const [lightTheme, setLightTheme] = useState(false)
    const [settings, setSettings] = useState(false)
    const [logoutPopUp, setLogoutPopUp] = useState(false)
    const [addAssistantPopUp, setAddAssistantPopUp] = useState(false)

    const userUUID = localStorage.getItem('currentUserUUID')

    const [customAssistants, setCustomAssistans] = useState([])
    const customAssistantsDocRef = doc(db, "CustomAssistants", userUUID)

    useEffect(() => {
        if(localStorage.getItem('lightTheme') !== null) {
          if(localStorage.getItem('lightTheme') === 'true') {
            setLightTheme(true)
            console.log('light mode is on')
          }
        }
        console.log(userUUID)
        const fetchCustomAssistants = async() => {
            let data, docSnap
            let assistantsData = []
            try {
                docSnap = await getDoc(customAssistantsDocRef)

                if(docSnap.data()) 
                    assistantsData = docSnap.data()['assistants']

                setCustomAssistans(assistantsData)
                console.log(assistantsData)
            } catch(error) {
                console.log(error)
            }
            // const assistant = {
            //     name: 'mondy',
            //     instruction: 'This is testing testing',
            //     photo: 'None'
            // }
            // assistantsData.push(assistant)

            // // set the appended new assistant by using setDoc (the assistant must be appended)
            // await setDoc(customAssistantsDocRef, {'assistants': assistantsData})

            // docSnap = await getDoc(customAssistantsDocRef)
            // data = docSnap.data()['assistants']
            // console.log('after', data)
        }

        fetchCustomAssistants()

    }, [])

    const toggleLightTheme = () => {
        if(lightTheme) localStorage.setItem('lightTheme', false)
        else localStorage.setItem('lightTheme', true)
        setLightTheme(prev => !prev)
    }

    const toggleSettings = () => {
        setSettings(prev => !prev)
    }

    const toggleLogoutPopUp = () => {
        setLogoutPopUp(prev => !prev)
    }

    const toggleAddAssistantPopUp = () => {
        setAddAssistantPopUp(prev => !prev)
    }

    return (
        <ModelProvider value={{lightTheme, toggleLightTheme, settings, toggleSettings, logoutPopUp, toggleLogoutPopUp, addAssistantPopUp, toggleAddAssistantPopUp}}>
            <div className={`${lightTheme ? 'bg-[#e8e8e8]' : 'bg-[#151515]'} relative w-full min-h-screen flex flex-col items-center justify-start select-none pb-7 overflow-x-hidden`}>
                <Header />
                <MainActionLanding customAssistants={customAssistants}/>
                <LogoutPopUp />
                <Settings />
            </div>
        </ModelProvider>
    )
} 

export default MainActionPage