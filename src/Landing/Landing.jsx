import '../App.css'
import { LinearGradient as Lg } from 'react-text-gradients'
import Lottie from 'lottie-react'
// import animationData from '../../public/Assets/abstract-1.json'
import animationData from '../../public/Assets/abstract-2.json'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useModelContext } from '../context/ModelContext'
import LandContent from './LandContent/LandContent'

function App() {
  const { lightTheme } = useModelContext()

  return (
    <div className={`${lightTheme ? 'bg-[#e8e8e8]' : 'bg-[#151515]'} transition-all w-full min-h-screen flex flex-col items-center justify-start select-none pb-7 overflow-hidden`}>
      <Header />
      <LandContent />
      <Footer />
    </div>
  )
}

export default App


