import { useEffect, useState } from "react"

function ChatModel() {
    const [lightTheme, setLightTheme] = useState(false)
    useEffect(() => {
        if(localStorage.getItem('lightTheme') !== null) {
          if(localStorage.getItem('lightTheme') === 'true') {
            setLightTheme(true)
            console.log('light mode is on')
          }
        }
    }, [])

    return (
        <div className={`${lightTheme ? 'bg-[#e8e8e8] text-black' : 'bg-[#151515] text-gray-300'} relative w-full min-h-screen flex flex-col items-center justify-start select-none pb-7 overflow-hidden`}>
            heyyeyey
        </div>
    )
}

export default ChatModel