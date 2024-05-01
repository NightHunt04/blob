import { LinearGradient as Lg } from 'react-text-gradients'
import { useModelContext } from '../../../context/ModelContext'
import { auth } from '../../../config/firebase'
import { useNavigate } from 'react-router-dom'

function MainActionLanding() {
    const { lightTheme } = useModelContext()
    const navigate = useNavigate()
    const displayName = localStorage.getItem('currentUserDisplayName')

    return (
        <div className="w-full flex flex-col items-start justify-center px-[20px] md:px-[100px] pt-5">
            {/* <div className='md:flex items-center justify-center pb-2'>
                <p className="text-[#555555] font-bold font-roboto-serif text-[52px] md:text-[100px]">Hello,&nbsp;</p>
                <p className='font-bold font-roboto-serif text-[52px] md:text-[100px] -mt-3 leading-[55px]'><Lg gradient={['to right', '#ABDE73, #be5869']}>{displayName}</Lg></p>
            </div> */}

            <div className='mb-[75px] md:mb-[120px] border-[1px] border-[#c51111] rounded-lg px-3 py-2 w-full md:w-9/12 opacity-80 bg-[#000000]'>
                <span className='text-red-500 text-[13px] md:text-[17px]'>Note:&nbsp;</span>
                <span className='text-[12px] md:text-[16px] text-gray-300'>The APIs which are being used for fetching the responses from the below models are reverse engineered by someone else and are provided for absolutely free. So, in case if any model is not providing the expected response, then there are may occur internal server error which isn't in my hands, and for that I apologise.</span>
            </div>

            <p className='text-[13px] md:text-[16px] font-inter text-gray-400 text-center w-full'>Click on the model you want to try.</p>

            <div className={`pt-6 md:pt-[50px] py-2 w-full ${lightTheme ? 'text-gray-900' : 'text-gray-300'}`}>
                <div className='grid grid-cols-1 md:grid-cols-2 items-start justify-center'>
                    
                    {/* custom space */}
                    <div>
                        <p className='font-inter text-[15px] md:text-[20px] font-medium ml-3 py-2'>Models</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} flex flex-col items-center justify-center shadow-lg w-full md:w-[750px] mb-8`}>

                            {/* chat completion */}
                            <p className='font-inter font-medium mb-6 text-[14px] md:text-[17px] px-5 py-2 rounded-[20px] bg-[#1e1e1e] text-center md:text-left w-[90%]'>Chat completion models</p>
                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full md:w-[730px] border-b-[1px] pb-4 border-gray-600'>
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('mistral-7b')}>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/openhermes.jpg" alt="OpenHermes" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>OpenHermes</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('mistral-7b')}>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/mistral-7b.jpeg" alt="Mistral" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Mistral 7B</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('chatgpt')}>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="ChatGPT" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>ChatGPT</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('gemini')}>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/gemini.png" alt="Gemini" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gemini</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('gemini')}>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/palm.png" alt="PaLM" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>PaLM</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('llama')}>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/llama.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>LLama</p>
                                </div>

                            </div>

                            <p className='font-inter mb-6 font-medium text-[14px] md:text-[17px] mt-[30px] md:mt-[40px] px-5 py-2 w-[90%] rounded-[20px] text-center md:text-left bg-[#1e1e1e]'>Image generative models</p>
                            {/* image generators */}
                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full md:w-[730px]'>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('dalle')}>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/dalle.png" alt="Dall-E" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Dall-E</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('dalle')}>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#ce9000] hover:bg-[#ce9000e4] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] md:text-[20px] text-white'>SD</p>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] e-full text-center ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Stable Diffusion</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('sdxl')}>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#ce4f00] hover:bg-[#ce4f00e3] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] text-white md:text-[20px]'>SDXL</p>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] e-full text-center ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Stable Diffusion XL</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* models for fun */}
                    <div>
                        <p className='font-inter text-[15px] md:text-[20px] font-medium ml-3 py-2'>Models for fun</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} flex flex-col items-center justify-center shadow-lg w-full md:w-[750px] mb-8`}>
                            <p className='font-inter font-medium mb-6 text-[14px] md:text-[17px] px-5 py-2 rounded-[20px] bg-[#1e1e1e] w-[90%] text-center md:text-left'>Fine-tunned models</p>

                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full md:w-[730px]'>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('rahul-gandhi')}>
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

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer'>
                                    <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <i className={`fa-solid fa-plus text-[26px] text-gray-300`}></i>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 md:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Add</p>
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