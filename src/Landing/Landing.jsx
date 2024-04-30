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


