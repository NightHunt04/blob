import '../App.css'
import { LinearGradient as Lg } from 'react-text-gradients'
import Lottie from 'lottie-react'
// import animationData from '../../public/Assets/abstract-1.json'
import animationData from '../../public/Assets/abstract-2.json'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useState } from 'react'

function App() {
  const [light, setLight] = useState(false)

  const toggleTheme = () => {
    setLight(prev => !prev)
  }

  return (
    <div className='bg-black w-full min-h-screen flex flex-col items-center justify-start select-none pb-7'>
      <div className={`fixed left-3 bottom-[110px] md:bottom-10 w-[45px] h-[45px] flex items-center justify-center ${light ? 'bg-slate-900 text-gray-300' : 'bg-gray-400 text-gray-900'} rounded-lg shadow-lg`} onClick={toggleTheme}>
        <div className='border-2 border-gray-700 w-[37px] h-[37px] flex items-center justify-center rounded-lg'>
          <i className={`fa-solid ${light ? 'fa-moon' : 'fa-sun'}`}></i>
        </div>
      </div>
      <Header />
      <div className='w-full flex flex-col items-center justify-center pt-6'>
        <h1 className='text-[120px] md:text-[150px] font-bold font-roboto-serif'>
          <Lg gradient={['to right', '#c2e59c, #be5869']}>
            Model
          </Lg>
          <span className='flex items-center justify-center leading-[30px] pb-10 md:pb-0 md:inline-block text-[120px] md:text-[150px] text-[#555555] font-bold font-roboto-serif'>Mate</span>
        </h1>
        <p className='font-inter text-[14px] md:text-[19px] text-[#c4c4c4] md:pb-0'>Have your own buddy AI bot !</p>

        {/* <div className='flex items-center justify-center w-[650px] opacity-75'>
          <Lottie animationData={animationData}/>
        </div> */}

      </div>
      <div className='w-full h-[500px] md:w-[1200px] md:h-[700px] rounded-xl py-4 px-3'>
        <img src="/Assets/talk-up.JPG" alt="img" className='w-full h-full object-cover rounded-xl'/>
      </div>
      <p className='font-inter text-[25px] md:text-[29px] font-bold text-[#c4c4c4] pt-12'>Chat with the model</p>
      <p className='font-inter text-[15px] md:text-[18px] font-regular text-[#c4c4c4] max-w-full px-6 md:max-w-[580px] text-center pb-12'>Embrace Curiosity, Empower Learning: Journey into the Depths of Knowledge with AI, Where Every Question Unveils a New Realm of Insight and Understanding</p>
      
      <div className='w-full h-[500px] md:w-[1200px] md:h-[700px] rounded-xl py-4 px-3'>
        <img src="/Assets/bob.JPG" alt="img" className='w-full h-full object-cover rounded-xl'/>
      </div>
      <p className='font-inter text-[25px] md:text-[29px] font-bold text-[#c4c4c4] pt-12'>Generate images</p>
      <p className='font-inter text-[15px] md:text-[18px] font-regular text-[#c4c4c4] max-w-full px-6 md:max-w-[580px] text-center pb-12'>Unleash Your Imagination, Transforming Ideas into Captivating Visuals: Harness the Power of AI to Craft Beautiful Images from Your Thoughts and Words</p>

      <div className='w-full h-[500px] md:w-[1200px] md:h-[700px] rounded-xl py-4 px-3'>
        <img src="/Assets/tune.JPG" alt="img" className='w-full h-full object-cover rounded-xl'/>
      </div>
      <p className='font-inter text-[25px] md:text-[29px] font-bold text-[#c4c4c4] pt-12'>Tune your own model</p>
      <p className='font-inter text-[15px] md:text-[18px] font-regular text-[#c4c4c4] max-w-full px-6 md:max-w-[580px] text-center pb-12'>Unlocking AI Authenticity: Molding Distinctive Personalities through the Creative Influence of Words and Prompts, Where Every Expression Shapes a Unique Identity</p>

      <Footer />
    </div>
  )
}

export default App


