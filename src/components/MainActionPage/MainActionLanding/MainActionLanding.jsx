import { LinearGradient as Lg } from 'react-text-gradients'
import { useModelContext } from '../../../context/ModelContext'
import { auth } from '../../../config/firebase'

function MainActionLanding() {
    const { lightTheme } = useModelContext()
    const displayName = localStorage.getItem('currentUserDisplayName')

    return (
        <div className="w-full flex flex-col items-start justify-center px-[20px] md:px-[100px] pt-5">
            <div className='md:flex items-center justify-center pb-2'>
                <p className="text-[#555555] font-bold font-roboto-serif text-[52px] md:text-[100px]">Hello,&nbsp;</p>
                <p className='font-bold font-roboto-serif text-[52px] md:text-[100px] -mt-3 leading-[55px]'><Lg gradient={['to right', '#ABDE73, #be5869']}>{displayName}</Lg></p>
            </div>

            <div className='mb-[70px] border-[1px] border-[#c51111] rounded-lg px-3 py-2 w-full md:w-9/12 opacity-80 bg-[#000000]'>
                <span className='text-red-500 text-[13px] md:text-[17px]'>Note:&nbsp;</span>
                <span className='text-[12px] md:text-[16px] text-gray-300'>The APIs which are being used for fetching the responses from the below models are reversed engineered by someone else and are provided for absolutely free. So, in case if any model is not providing the expected response, then there are some chances of internal server error which isn't in my hands, and for that I apologise.</span>
            </div>

            <div className={`pt-6 md:pt-[50px] py-2 w-full ${lightTheme ? 'text-gray-900' : 'text-gray-300'}`}>
                <div className='grid grid-cols-1 md:grid-cols-2 items-start justify-center'>
                    
                    {/* custom space */}
                    <div>
                        <p className='font-inter text-[15px] md:text-[20px] font-medium ml-3 py-2'>My space</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} shadow-lg w-full md:w-[850px] mb-8`}>
                            <div className='grid grid-cols-4 items-center justify-center gap-2 w-full md:w-[850px]'>
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <Lg gradient={['to right', '#c2e59c, #be5869']}>
                                            <i className="fa-solid fa-robot text-[21px] md:text-[28px]"></i>
                                        </Lg>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Bot-13340</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <i className={`fa-solid fa-plus text-[26px] text-gray-300`}></i>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Add</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* models for fun */}
                    <div>
                        <p className='font-inter text-[15px] md:text-[20px] font-medium ml-3 py-2'>Models for fun</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} shadow-lg w-full md:w-[850px] mb-8`}>
                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full md:w-[850px]'>
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/ai-art.jpeg" alt="Rahul Gandhi" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Image Generator</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/Rahul-Gandhi.jpeg" alt="Rahul Gandhi" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Rahul Gandhi</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/mario.jpg" alt="Rahul Gandhi" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Super Mario</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/jim.jpeg" alt="Rahul Gandhi" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Jim Carrey</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/bean.jpeg" alt="Rahul Gandhi" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Mr. Bean</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/walter.png" alt="Rahul Gandhi" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Walter White</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/batman.jpg" alt="Rahul Gandhi" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Batman</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/strange.jpeg" alt="Rahul Gandhi" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Dr. Strange</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* experts */}
                    <div>
                        <p className='font-inter text-[15px] md:text-[20px] font-medium ml-3 py-2'>Experts</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} shadow-lg w-full md:w-[850px] mb-8`}>
                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full md:w-[850px]'>
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <i className="fa-solid fa-robot text-[21px] md:text-[28px] text-red-500"></i>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Writer</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <i className="fa-solid fa-robot text-[21px] md:text-[28px] text-blue-500"></i>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Doctor</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <i className="fa-solid fa-robot text-[21px] md:text-[28px] text-gray-500"></i>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Coder</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <i className="fa-solid fa-robot text-[21px] md:text-[28px] text-[#cc7620]"></i>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Lawyer</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <i className="fa-solid fa-robot text-[21px] md:text-[28px] text-[#69cf3a]"></i>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Dietitian</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <i className="fa-solid fa-robot text-[21px] md:text-[28px] text-[#c0c0c0]"></i>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Accountant</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <i className="fa-solid fa-robot text-[21px] md:text-[28px] text-[#cce445]"></i>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Chef</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <i className="fa-solid fa-robot text-[21px] md:text-[28px] text-[#3acfca]"></i>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Scientist</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainActionLanding