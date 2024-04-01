import './App.css'
import Landing from './Landing/Landing'
import { ModelProvider } from './context/ModelContext' 
import { useState } from 'react'

function App() {
  const [lightTheme, setLightTheme] = useState(false)
  
  const toggleLightTheme = () => {
    setLightTheme(prev => !prev)
  }

  return (
    <ModelProvider value={{lightTheme, toggleLightTheme}}>
      <Landing />
    </ModelProvider>
  )
}

export default App


