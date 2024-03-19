import './App.css'
import { LinearGradient as Lg } from 'react-text-gradients'

function App() {

  return (
    // <div className='relative text-3xl bg-slate-950 w-full min-h-screen text-gray-100 flex-col pt-[350px] md:pt-[480px] items-center justify-center'>
    //   <div className='flex items-center justify-center'>
    //     <div className='absolute w-[300px] h-[300px] md:w-[800px] md:h-[800px]'>
    //       <svg id="sw-js-blob-svg" className="blur-md magicpattern" viewBox="-50 -50 150 150">  
    //         <defs>                        
    //           <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">          
    //             <stop id="stop1" stop-color="rgba(168.212, 55, 248, 1)" offset="0%"></stop>
    //             <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>                        
    //           </linearGradient>                    
    //         </defs>                
    //         <path fill="url(#sw-gradient)" width="100%" height="100%" transform="translate(0 0)" strokeWidth="0">
    //           <animate
    //             attributeName='d'
    //             dur='14000ms'
    //             repeatCount='indefinite'
    //             values='
    //               M89,66Q88,82,72.5,86Q57,90,47.5,80Q38,70,28.5,65.5Q19,61,12,47Q5,33,19.5,27.5Q34,22,45.5,17Q57,12,67.5,19Q78,26,84,38Q90,50,89,66Z;
    //               M88,65.5Q86,81,70.5,79.5Q55,78,46.5,74.5Q38,71,21.5,68.5Q5,66,13.5,53Q22,40,30.5,35.5Q39,31,47,25Q55,19,62.5,26Q70,33,80,41.5Q90,50,88,65.5Z;
    //               M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
    //               M74.5,56.5Q66,63,60.5,71.5Q55,80,44.5,79Q34,78,29.5,68.5Q25,59,18,47.5Q11,36,24.5,33Q38,30,47,22Q56,14,63.5,23Q71,32,77,41Q83,50,74.5,56.5Z;
    //               M89,66Q88,82,72.5,86Q57,90,47.5,80Q38,70,28.5,65.5Q19,61,12,47Q5,33,19.5,27.5Q34,22,45.5,17Q57,12,67.5,19Q78,26,84,38Q90,50,89,66Z'
    //           ></animate>  
    //         </path>              
    //       </svg>
    //     </div>

    //     <div className='absolute w-[300px] h-[300px] md:w-[800px] md:h-[800px]'>
    //       <svg id="sw-js-blob-svg" className="blur-md magicpattern3" viewBox="10 5 150 150">  
    //         <defs>                        
    //           <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">          
    //             <stop id="stop1" stop-color="rgba(168.212, 55, 248, 1)" offset="0%"></stop>
    //             <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>                        
    //           </linearGradient>                    
    //         </defs>                
    //         <path fill="url(#sw-gradient)" width="100%" height="100%" transform="translate(0 0)" strokeWidth="0">
    //           <animate
    //             attributeName='d'
    //             dur='14000ms'
    //             repeatCount='indefinite'
    //             values='
    //               M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
    //               M74.5,56.5Q66,63,60.5,71.5Q55,80,44.5,79Q34,78,29.5,68.5Q25,59,18,47.5Q11,36,24.5,33Q38,30,47,22Q56,14,63.5,23Q71,32,77,41Q83,50,74.5,56.5Z;
    //               M88,65.5Q86,81,70.5,79.5Q55,78,46.5,74.5Q38,71,21.5,68.5Q5,66,13.5,53Q22,40,30.5,35.5Q39,31,47,25Q55,19,62.5,26Q70,33,80,41.5Q90,50,88,65.5Z;
    //               M89,66Q88,82,72.5,86Q57,90,47.5,80Q38,70,28.5,65.5Q19,61,12,47Q5,33,19.5,27.5Q34,22,45.5,17Q57,12,67.5,19Q78,26,84,38Q90,50,89,66Z;
    //               M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
    //               '
    //           ></animate>  
    //         </path>              
    //       </svg>
    //     </div>

    //     <div className='absolute w-[300px] h-[300px] md:w-[800px] md:h-[800px]'>
    //       <svg id="sw-js-blob-svg" className="blur-md magicpattern2" viewBox="10 -170 400 400">  
    //         <defs>                        
    //           <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">          
    //             <stop id="stop1" stop-color="rgba(168.212, 55, 248, 1)" offset="0%"></stop>
    //             <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>                        
    //           </linearGradient>                    
    //         </defs>                
    //         <path fill="url(#sw-gradient)" width="100%" height="100%" transform="translate(0 0)" strokeWidth="0">
    //           <animate
    //             attributeName='d'
    //             dur='14000ms'
    //             repeatCount='indefinite'
    //             values='
    //               M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
    //               M89,66Q88,82,72.5,86Q57,90,47.5,80Q38,70,28.5,65.5Q19,61,12,47Q5,33,19.5,27.5Q34,22,45.5,17Q57,12,67.5,19Q78,26,84,38Q90,50,89,66Z;
    //               M88,65.5Q86,81,70.5,79.5Q55,78,46.5,74.5Q38,71,21.5,68.5Q5,66,13.5,53Q22,40,30.5,35.5Q39,31,47,25Q55,19,62.5,26Q70,33,80,41.5Q90,50,88,65.5Z;
    //               M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
    //               M74.5,56.5Q66,63,60.5,71.5Q55,80,44.5,79Q34,78,29.5,68.5Q25,59,18,47.5Q11,36,24.5,33Q38,30,47,22Q56,14,63.5,23Q71,32,77,41Q83,50,74.5,56.5Z;
    //               M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
    //               '
    //           ></animate>  
    //         </path>              
    //       </svg>
    //     </div>
    //     <h1 className='title z-10 font-dm font-black text-[75px] md:text-[180px]'>Hey there</h1>
    //   </div>
    //   <div className='flex items-center justify-center pt-[900px]'>
    //     this is new div
    //   </div>
    // </div>



    <div className='bg-black w-full min-h-screen flex flex-col items-center justify-start select-none pb-7'>
      <div className='flex items-center justify-between px-[30px] md:px-[94px] w-full pt-6 md:pt-10 cursor-pointer'>
        <h1 className='text-[24px] md:text-[30px] font-bold font-roboto-serif'>
          <Lg gradient={['to right', '#c2e59c, #be5869']}>
            m.
          </Lg>
        </h1>
        <button className='bg-[#505050] font-inter text-[14px] md:text-[17px] px-[17px] py-[4px] md:px-[20px] md:py-[6px] rounded-[28px] text-[#EBEBEB] hover:opacity-80'>
          Login / Sign in
        </button>
      </div>
      <h1 className='text-[120px] md:text-[150px] font-bold font-roboto-serif'>
        <Lg gradient={['to right', '#c2e59c, #be5869']}>
          Model
        </Lg>
        <span className='flex items-center justify-center leading-[30px] pb-10 md:pb-0 md:leading-none md:inline-block text-[120px] md:text-[150px] text-[#555555] font-bold font-roboto-serif'>Mate</span>
      </h1>
      {/* <h1 className='text-[150px] text-[#555555] font-bold font-roboto-serif leading-[20px]'>
        mate
      </h1> */}
      <p className='font-inter text-[14px] md:text-[18px] text-[#c4c4c4] leading-3 pb-8 md:pb-16'>Have your own buddy AI bot !</p>
      <button className='font-inter text-[16px] md:text-[20px] bg-gradient-to-r from-[#c2e59c] to-[#be5869] text-black px-5 py-1 rounded-[28px] hover:opacity-80'>Get Started</button>
      <p className='font-inter text-[14px] text-[#c4c4c4] pt-8 md:pt-16'>Tools</p>
      
      <div className='w-full h-[500px] md:w-[1200px] md:h-[700px] rounded-xl py-4 px-3'>
        <img src="/Assets/talk-up.JPG" alt="img" className='w-full h-full object-cover rounded-xl'/>
      </div>
      <p className='font-inter text-[28px] font-bold text-[#c4c4c4] pt-12'>Chat with the model</p>
      <p className='font-inter text-[18px] font-regular text-[#c4c4c4] max-w-full px-6 md:max-w-[580px] text-center pb-12'>Embrace Curiosity, Empower Learning: Journey into the Depths of Knowledge with AI, Where Every Question Unveils a New Realm of Insight and Understanding</p>
      
      <div className='w-full h-[500px] md:w-[1200px] md:h-[700px] rounded-xl py-4 px-3'>
        <img src="/Assets/bob.JPG" alt="img" className='w-full h-full object-cover rounded-xl'/>
      </div>
      <p className='font-inter text-[28px] font-bold text-[#c4c4c4] pt-12'>Generate images</p>
      <p className='font-inter text-[18px] font-regular text-[#c4c4c4] max-w-full px-6 md:max-w-[580px] text-center pb-12'>Unleash Your Imagination, Transforming Ideas into Captivating Visuals: Harness the Power of AI to Craft Beautiful Images from Your Thoughts and Words</p>

      <div className='w-full h-[500px] md:w-[1200px] md:h-[700px] rounded-xl py-4 px-3'>
        <img src="/Assets/tune.JPG" alt="img" className='w-full h-full object-cover rounded-xl'/>
      </div>
      <p className='font-inter text-[28px] font-bold text-[#c4c4c4] pt-12'>Tune your own model</p>
      <p className='font-inter text-[18px] font-regular text-[#c4c4c4] max-w-full px-6 md:max-w-[580px] text-center pb-12'>Unlocking AI Authenticity: Molding Distinctive Personalities through the Creative Influence of Words and Prompts, Where Every Expression Shapes a Unique Identity</p>
    </div>
  )
}

export default App


