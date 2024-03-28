import './App.css'
import Landing from './Landing/Landing'
import { BrowserRouter } from 'react-router-dom'
import { ModelProvider } from './context/ModelContext' 
import { useState } from 'react'

function App() {
  const [lightTheme, setLightTheme] = useState(false)
  const [entrance, setEntrance] = useState(false)
  
  const toggleLightTheme = () => {
    setLightTheme(prev => !prev)
  }

  const toggleEntrance = () => {
    setEntrance(prev => !prev)
  }

  return (
    <ModelProvider value={{lightTheme, toggleLightTheme, entrance, toggleEntrance}}>
      <Landing />
    </ModelProvider>
  )
}

export default App


