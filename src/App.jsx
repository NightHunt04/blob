import Landing from './Landing/Landing'
import { ModelProvider } from './context/ModelContext' 
import { useEffect, useState } from 'react'
import './style.css'

function App() {
  const [lightTheme, setLightTheme] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('lightTheme') !== null) {
      if(localStorage.getItem('lightTheme') === 'true') {
        setLightTheme(true)
        console.log('light mode is on')
      }
    }
  }, [])

  const toggleLightTheme = () => {
    if(lightTheme) localStorage.setItem('lightTheme', false)
    else localStorage.setItem('lightTheme', true)
    setLightTheme(prev => !prev)
  }

  return (
    <ModelProvider value={{lightTheme, toggleLightTheme}}>
      <Landing />
    </ModelProvider>
  )
}

export default App


