import { LinearGradient as Lg } from 'react-text-gradients'
import { useModelContext } from '../../context/ModelContext'
import { auth, googleProvider } from '../../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function LandContent() {
    const { lightTheme } = useModelContext()
    const navigate = useNavigate()

    const handleEntrance = async() => {
        if(localStorage.getItem('currentUserDisplayName') === null) {
            try {
                await signInWithPopup(auth, googleProvider)
    
                // set the details regarding the current user in localstorage
                localStorage.setItem('currentUserDisplayName', auth?.currentUser?.displayName)
                localStorage.setItem('currentUserUUID', auth?.currentUser?.uid)
                localStorage.setItem('currentUserProfileURL', auth?.currentUser?.photoURL)
                localStorage.setItem('currentUserEmail', auth?.currentUser?.email)
    
                navigate('action')
            } catch(err) {
                console.error(err)
            }
        }
        else navigate('action')   
    }

    return (
        <div>
            <div className={`relative w-full flex flex-col items-center justify-center pt-6 overflow-hidden`}>
                <h1 className='text-[100px] 2xl:text-[150px] z-30 font-bold font-roboto-serif'>
                    <Lg gradient={['to right', '#ABDE73, #be5869']}>Model</Lg>
                    <span className='flex items-center justify-center z-30 leading-[30px] pb-10 2xl:pb-0 2xl:inline-block text-[100px] 2xl:text-[150px] text-[#868686] font-bold font-roboto-serif'>Mate</span>
                </h1>

                <div className='relative group z-30 mt-5'>
                    <div className='z-30 absolute rounded-[28px] -inset-[1px] opacity-75 bg-gradient-to-r from-[#ABDE73] to-[#be5869]'></div>
                    <button className='z-30 relative bg-[#323232] group-hover:bg-[#282828] transition duration-300 font-inter text-[14px] xl:text-[17px] px-[8px] py-[4px] xl:px-[11px] xl:py-[6px] rounded-[28px] text-[#dedede]' onClick={handleEntrance}>
                        {
                            localStorage.getItem('currentUserDisplayName') !== null ?
                                <div><span className='text-[14px] px-1 xl:text-[16px] font-inter group-hover:text-white transition duration-200'>Go to action <i class="fa-solid fa-arrow-right"></i></span></div>
                            :
                                <div><i className="fa-brands fa-google px-1 text-[#DB4437]"></i> <span className='group-hover:text-white transition duration-200'>Sign in</span></div>
                        }
                    </button>
                </div>

                <p className={`font-inter text-[14px] 2xl:text-[19px] ${lightTheme ? 'text-black' : 'text-[#c4c4c4]'} pt-12 2xl:pb-0`}>Have your own buddy AI bot !</p>

                <div className='absolute transform translate-x-[320px] z-10 -translate-y-[130px] 2xl:translate-x-[675px]  2xl:translate-y-[0px] w-[500px] h-[500px] 2xl:w-[900px] 2xl:h-[900px] opacity-30'>
                    <svg id="sw-js-blob-svg" className="blur-2xl" viewBox="10 -170 400 400">  
                        <defs>                        
                            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">          
                                <stop id="stop1" stopColor="rgba(194, 229, 156, 1)" offset="0%"></stop>
                                <stop id="stop2" stopColor="rgba(190, 88, 105, 1)" offset="100%"></stop>                        
                            </linearGradient>                    
                        </defs>                
                        <path fill="url(#sw-gradient)" width="100%" height="100%" transform="translate(0 0)" strokeWidth="0">
                            <animate
                                attributeName='d'
                                dur='17s'
                                repeatCount='indefinite'
                                values='
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                    M89,66Q88,82,72.5,86Q57,90,47.5,80Q38,70,28.5,65.5Q19,61,12,47Q5,33,19.5,27.5Q34,22,45.5,17Q57,12,67.5,19Q78,26,84,38Q90,50,89,66Z;
                                    M88,65.5Q86,81,70.5,79.5Q55,78,46.5,74.5Q38,71,21.5,68.5Q5,66,13.5,53Q22,40,30.5,35.5Q39,31,47,25Q55,19,62.5,26Q70,33,80,41.5Q90,50,88,65.5Z;
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                    M74.5,56.5Q66,63,60.5,71.5Q55,80,44.5,79Q34,78,29.5,68.5Q25,59,18,47.5Q11,36,24.5,33Q38,30,47,22Q56,14,63.5,23Q71,32,77,41Q83,50,74.5,56.5Z;
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                '
                            ></animate>  
                        </path>              
                    </svg>
                </div>

                

                <div className='absolute transform translate-x-[60px] z-10 translate-y-[20px] 2xl:-translate-x-[60px]  2xl:-translate-y-[110px] w-[500px] h-[500px] 2xl:w-[900px] 2xl:h-[900px] opacity-30'>
                    <svg id="sw-js-blob-svg" className="blur-2xl" viewBox="10 -170 400 400">  
                        <defs>                        
                            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">          
                                <stop id="stop1" stopColor="rgba(194, 229, 156, 1)" offset="0%"></stop>
                                <stop id="stop2" stopColor="rgba(190, 88, 105, 1)" offset="100%"></stop>                        
                            </linearGradient>                    
                        </defs>                
                        <path fill="url(#sw-gradient)" width="100%" height="100%" transform="translate(0 0)" strokeWidth="0">
                            <animate
                                attributeName='d'
                                dur='19s'
                                repeatCount='indefinite'
                                values='
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                    M88,65.5Q86,81,70.5,79.5Q55,78,46.5,74.5Q38,71,21.5,68.5Q5,66,13.5,53Q22,40,30.5,35.5Q39,31,47,25Q55,19,62.5,26Q70,33,80,41.5Q90,50,88,65.5Z;
                                    M89,66Q88,82,72.5,86Q57,90,47.5,80Q38,70,28.5,65.5Q19,61,12,47Q5,33,19.5,27.5Q34,22,45.5,17Q57,12,67.5,19Q78,26,84,38Q90,50,89,66Z;
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                    M74.5,56.5Q66,63,60.5,71.5Q55,80,44.5,79Q34,78,29.5,68.5Q25,59,18,47.5Q11,36,24.5,33Q38,30,47,22Q56,14,63.5,23Q71,32,77,41Q83,50,74.5,56.5Z;
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                '
                            ></animate>  
                        </path>              
                    </svg>
                </div>
            </div>

            <div className='w-full h-[500px] 2xl:w-[1200px] 2xl:h-[700px] overflow-hidden rounded-2xl py-4 px-3 z-20'>
                <img src="/Assets/talk-up.JPG" alt="img" className='w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-300'/>
            </div>

            <div className='relative flex flex-col items-center justify-center py-[100px] overflow-hidden'>
                <p className={`font-inter text-[25px] w-full 2xl:text-[32px] text-center font-bold z-20 ${lightTheme ? 'text-black' : 'text-[#e6e6e6]'} pt-12 px-3`}>Chat with the model</p>
                <p className={`font-inter text-[14px] sm:text-[14px] 2xl:text-[19px] font-regular z-20 ${lightTheme ? 'text-black' : 'text-[#e6e6e6]'} w-full px-6 2xl:max-w-[580px] text-center pb-12`}>Embrace Curiosity, Empower Learning: Journey into the Depths of Knowledge with AI, Where Every Question Unveils a New Realm of Insight and Understanding</p>
                <div className='absolute transform translate-x-[40px] translate-y-[50px] 2xl:translate-x-[235px] 2xl:translate-y-[170px] w-[440px] h-[440px] 2xl:w-[700px] 2xl:h-[800px] opacity-30 z-10'>
                    <svg id="sw-js-blob-svg" className="blur-2xl" viewBox="10 5 150 150">  
                        <defs>                        
                            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">          
                                <stop id="stop1" stopColor="rgba(194, 229, 156, 1)" offset="0%"></stop>
                                <stop id="stop2" stopColor="rgba(190, 88, 105, 1)" offset="100%"></stop>                        
                            </linearGradient>                    
                        </defs>                
                        <path fill="url(#sw-gradient)" width="100%" height="100%" transform="translate(0 0)" strokeWidth="0">
                            <animate
                                attributeName='d'
                                dur='17s'
                                repeatCount='indefinite'
                                values='
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                    M74.5,56.5Q66,63,60.5,71.5Q55,80,44.5,79Q34,78,29.5,68.5Q25,59,18,47.5Q11,36,24.5,33Q38,30,47,22Q56,14,63.5,23Q71,32,77,41Q83,50,74.5,56.5Z;
                                    M88,65.5Q86,81,70.5,79.5Q55,78,46.5,74.5Q38,71,21.5,68.5Q5,66,13.5,53Q22,40,30.5,35.5Q39,31,47,25Q55,19,62.5,26Q70,33,80,41.5Q90,50,88,65.5Z;
                                    M89,66Q88,82,72.5,86Q57,90,47.5,80Q38,70,28.5,65.5Q19,61,12,47Q5,33,19.5,27.5Q34,22,45.5,17Q57,12,67.5,19Q78,26,84,38Q90,50,89,66Z;
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                '
                            ></animate>  
                        </path>              
                    </svg>
                </div> 
            </div>

            <div className='w-full h-[500px] 2xl:w-[1200px] 2xl:h-[700px] overflow-hidden rounded-2xl py-4 px-3 z-20'>
                <img src="/Assets/bob.JPG" alt="img" className='w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-300'/>
            </div>

            <div className='relative flex flex-col items-center justify-center py-[100px] overflow-hidden'>
                <p className={`font-inter text-[25px] w-full 2xl:text-[32px] text-center z-20 font-bold ${lightTheme ? 'text-black' : 'text-[#e6e6e6]'} pt-12 px-3`}>Generate images</p>
                <p className={`font-inter text-[14px] sm:text-[14px] 2xl:text-[19px] z-20 font-regular ${lightTheme ? 'text-black' : 'text-[#e6e6e6]'} w-full px-6 2xl:max-w-[580px] text-center pb-12`}>Unleash Your Imagination, Transforming Ideas into Captivating Visuals: Harness the Power of AI to Craft Beautiful Images from Your Thoughts and Words</p>

                <div className='absolute transform translate-x-[130px] translate-y-[70px] 2xl:translate-x-[105px] 2xl:translate-y-[120px] w-[340px] h-[340px] 2xl:w-[600px] 2xl:h-[600px] opacity-30 z-10'>
                    <svg id="sw-js-blob-svg" className="blur-2xl" viewBox="10 5 150 150">  
                        <defs>                        
                            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">          
                                <stop id="stop1" stopColor="rgba(194, 229, 156, 1)" offset="0%"></stop>
                                <stop id="stop2" stopColor="rgba(190, 88, 105, 1)" offset="100%"></stop>                        
                            </linearGradient>                    
                        </defs>                
                        <path fill="url(#sw-gradient)" width="100%" height="100%" transform="translate(0 0)" strokeWidth="0">
                            <animate
                                attributeName='d'
                                dur='17s'
                                repeatCount='indefinite'
                                values='
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                    M74.5,56.5Q66,63,60.5,71.5Q55,80,44.5,79Q34,78,29.5,68.5Q25,59,18,47.5Q11,36,24.5,33Q38,30,47,22Q56,14,63.5,23Q71,32,77,41Q83,50,74.5,56.5Z;
                                    M88,65.5Q86,81,70.5,79.5Q55,78,46.5,74.5Q38,71,21.5,68.5Q5,66,13.5,53Q22,40,30.5,35.5Q39,31,47,25Q55,19,62.5,26Q70,33,80,41.5Q90,50,88,65.5Z;
                                    M89,66Q88,82,72.5,86Q57,90,47.5,80Q38,70,28.5,65.5Q19,61,12,47Q5,33,19.5,27.5Q34,22,45.5,17Q57,12,67.5,19Q78,26,84,38Q90,50,89,66Z;
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                '
                            ></animate>  
                        </path>              
                    </svg>
                </div> 
            </div>

            <div className='w-full h-[500px] 2xl:w-[1200px] 2xl:h-[700px] overflow-hidden rounded-2xl py-4 px-3 z-20'>
                <img src="/Assets/tune.JPG" alt="img" className='w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-300'/>
            </div>

            {/* <div className='relative flex flex-col items-center justify-center py-[100px] overflow-hidden'>
                <p className={`font-inter w-full text-[25px] 2xl:text-[32px] text-center z-20 font-bold ${lightTheme ? 'text-black' : 'text-[#e6e6e6]'} pt-12 px-3`}>Tune your own model</p>
                <p className={`font-inter text-[14px] sm:text-[14px] 2xl:text-[19px] z-20 font-regular ${lightTheme ? 'text-black' : 'text-[#e6e6e6]'} w-full px-6 2xl:max-w-[580px] text-center pb-12`}>Unlocking AI Authenticity: Molding Distinctive Personalities through the Creative Influence of Words and Prompts, Where Every Expression Shapes a Unique Identity</p>

                <div className='absolute transform translate-x-[60px] translate-y-[20px] 2xl:translate-x-[175px] 2xl:translate-y-[0px] w-[500px] h-[500px] 2xl:w-[900px] 2xl:h-[900px] opacity-30'>
                    <svg id="sw-js-blob-svg" className="blur-2xl" viewBox="10 -170 400 400">  
                        <defs>                        
                            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">          
                                <stop id="stop1" stopColor="rgba(194, 229, 156, 1)" offset="0%"></stop>
                                <stop id="stop2" stopColor="rgba(190, 88, 105, 1)" offset="100%"></stop>                        
                            </linearGradient>                    
                        </defs>                
                        <path fill="url(#sw-gradient)" width="100%" height="100%" transform="translate(0 0)" strokeWidth="0">
                            <animate
                                attributeName='d'
                                dur='17s'
                                repeatCount='indefinite'
                                values='
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                    M89,66Q88,82,72.5,86Q57,90,47.5,80Q38,70,28.5,65.5Q19,61,12,47Q5,33,19.5,27.5Q34,22,45.5,17Q57,12,67.5,19Q78,26,84,38Q90,50,89,66Z;
                                    M88,65.5Q86,81,70.5,79.5Q55,78,46.5,74.5Q38,71,21.5,68.5Q5,66,13.5,53Q22,40,30.5,35.5Q39,31,47,25Q55,19,62.5,26Q70,33,80,41.5Q90,50,88,65.5Z;
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                    M74.5,56.5Q66,63,60.5,71.5Q55,80,44.5,79Q34,78,29.5,68.5Q25,59,18,47.5Q11,36,24.5,33Q38,30,47,22Q56,14,63.5,23Q71,32,77,41Q83,50,74.5,56.5Z;
                                    M79,63Q81,76,69.5,84.5Q58,93,43,91Q28,89,20.5,76Q13,63,14.5,50.5Q16,38,23.5,27.5Q31,17,43,19Q55,21,60.5,29Q66,37,71.5,43.5Q77,50,79,63Z;
                                '
                            ></animate>  
                        </path>              
                    </svg>
                </div>        
            </div> */}
      </div>
    )
}

export default LandContent