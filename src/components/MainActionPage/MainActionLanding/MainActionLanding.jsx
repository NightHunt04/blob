import { useModelContext } from '../../../context/ModelContext'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function MainActionLanding() {
    const { lightTheme, toggleAddAssistantPopUp } = useModelContext()
    const navigate = useNavigate()

    return (
        <div className="w-full flex flex-col items-start justify-center px-[20px] 2xl:px-[100px] pt-5">

            <div className={`mb-[75px] 2xl:mb-[120px] border-[1px] border-[#c51111] rounded-2xl px-3 py-2 w-full 2xl:w-9/12 opacity-80 ${lightTheme ? 'bg-[#cbcbcb] text-black' : 'bg-[#000000] text-gray-300'}`}>
                <span className='text-red-500 text-[13px] 2xl:text-[17px]'>Note:&nbsp;</span>
                <span className='text-[12px] 2xl:text-[16px]'>The APIs which are being used for fetching the responses from the below models are reverse engineered by someone else and are provided for absolutely free. So, in case if any model is not providing the expected response, then there are may occur internal server error which isn't in my hands, and for that I apologise.</span>
            </div>

            <p className='text-[13px] 2xl:text-[16px] font-inter text-gray-400 text-center w-full'>Click on the model you want to try.</p>

            <div className={`pt-6 2xl:pt-[50px] py-2 w-full ${lightTheme ? 'text-gray-900' : 'text-gray-300'}`}>
                <div className='grid grid-cols-1 2xl:grid-cols-2 items-start justify-center'>
                    
                    <div className='row-span-5'>
                        <p className='font-inter text-[15px] 2xl:text-[20px] font-medium ml-3 py-2'>Chat Completion Models</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} flex flex-col items-center justify-center shadow-2xl w-full 2xl:w-3/4 mb-8 border-2 ${lightTheme ? 'border-[#cecece]' : 'border-none'}`}>                            
                            
                            {/* Gpt */}
                            <p className={`font-inter font-medium mb-6 text-[14px] 2xl:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} text-center 2xl:text-left w-[90%]`}>GPT</p>
                            <div className='grid grid-cols-4 items-start gap-y-[26px] 2xl:gap-y-[33px] justify-center gap-2 w-full 2xl:w-calc(w-3/4 - 20px) border-b-[1px] pb-4 mb-10 border-gray-600'>
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chatgpt-4o')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gpt-4o</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chatgpt-4')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gpt-4</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chatgpt-3.5-turbo-r')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gpt-3.5-turbo</p>
                                </div>
                            </div>

                            {/* mixtral */}
                            <p className={`font-inter font-medium mb-6 text-[14px] 2xl:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} text-center 2xl:text-left w-[90%]`}>Mixtral</p>
                            <div className='grid grid-cols-4 items-start gap-y-[26px] 2xl:gap-y-[33px] justify-center gap-2 w-full 2xl:w-calc(w-3/4 - 20px) border-b-[1px] pb-4 mb-10 border-gray-600'>
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('mistral-7b-v0.1')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/mistral-7b.jpeg" alt="Mistral" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Mistral 7B v0.1</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('mistral-7b-v0.2')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/mistral-7b.jpeg" alt="Mistral" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Mistral 7B v0.2</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('mistral-8x7b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/mistral-7b.jpeg" alt="Mistral" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Mistral 8x7B</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('mistral-openocra')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/ocra.png" alt="Mistral" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Mistral OpenOcra</p>
                                </div>
                            </div>

                            {/* Hermes */}
                            <p className={`font-inter font-medium mb-6 text-[14px] 2xl:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} text-center 2xl:text-left w-[90%]`}>Hermes</p>
                            <div className='grid grid-cols-4 items-start gap-y-[26px] 2xl:gap-y-[33px] justify-center gap-2 w-full 2xl:w-calc(w-3/4 - 20px) border-b-[1px] pb-4 mb-10 border-gray-600'>
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('noushermes-yi')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/nous.jpeg" alt="Nous-Yi" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>NousHermes-Yi</p>
                                </div>
                                
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('noushermes-sft')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/nous-sft.jpeg" alt="SFT" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>NousHermes-SFT</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('noushermes-dpo')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/nous-sft.jpeg" alt="DPO" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>NousHermes-DPO</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('openhermes')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/openhermes.jpg" alt="OpenHermes" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>OpenHermes</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chronoshermes')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chronosHermes.png" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Chronous Hermes</p>
                                </div>
                            </div>

                            {/* LLama */}
                            <p className={`font-inter font-medium mb-6 text-[14px] 2xl:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} text-center 2xl:text-left w-[90%]`}>LLama</p>
                            <div className='grid grid-cols-4 items-start gap-y-[26px] 2xl:gap-y-[33px] justify-center gap-2 w-full 2xl:w-calc(w-3/4 - 20px) border-b-[1px] pb-4 mb-10 border-gray-600'>
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('llama-3-70b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/llama.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Llama-3-70b</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('llama-3-8b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/llama.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Llama-3-8b</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('llama-2-13b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/llama.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Llama-2-13b</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('llama-2-7b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/llama.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Llama-2-7b</p>
                                </div>


                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('codellama-70b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/llama.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>CodeLLama-70b</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('codellama-34b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/llama.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>CodeLLama-34b</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('codellama-13b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/llama.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>CodeLLama-13b</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('codellama-7b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/llama.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>CodeLLama-7b</p>
                                </div>
                            </div>

                            {/* vicuna */}
                            <p className={`font-inter font-medium mb-6 text-[14px] 2xl:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} text-center 2xl:text-left w-[90%]`}>Vicuna</p>
                            <div className='grid grid-cols-4 items-start gap-y-[26px] 2xl:gap-y-[33px] justify-center gap-2 w-full 2xl:w-calc(w-3/4 - 20px) border-b-[1px] pb-4 mb-10 border-gray-600'>
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('vicuna-7b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] 2xl:text-[20px] text-white'>V</p>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Vicuna-7b</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('vicuna-13b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] 2xl:text-[20px] text-white'>V</p>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Vicuna-13b</p>
                                </div>
                            </div>

                            {/* qwen */}
                            <p className={`font-inter font-medium mb-6 text-[14px] 2xl:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} text-center 2xl:text-left w-[90%]`}>Qwen</p>
                            <div className='grid grid-cols-4 items-start gap-y-[26px] 2xl:gap-y-[33px] justify-center gap-2 w-full 2xl:w-calc(w-3/4 - 20px) border-b-[1px] pb-4 mb-10 border-gray-600'>
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('qwen-14b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] 2xl:text-[20px] text-white'>Q</p>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Qwen-14B</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('qwen-7b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] 2xl:text-[20px] text-white'>Q</p>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Qwen-7B</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('qwen-4b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] 2xl:text-[20px] text-white'>Q</p>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Qwen-4B</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('qwen-1.8b')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] 2xl:text-[20px] text-white'>Q</p>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Qwen-1.8B</p>
                                </div>
                            </div>

                            {/* Other models */}
                            <p className={`font-inter font-medium mb-6 text-[14px] 2xl:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} text-center 2xl:text-left w-[90%]`}>Other Models</p>
                            <div className='grid grid-cols-4 items-start gap-y-[26px] 2xl:gap-y-[33px] justify-center gap-2 w-full 2xl:w-calc(w-3/4 - 20px)'>                                

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('llama')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/dolphin.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Dolphin</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('llama')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/deepseek.png" alt="LLama" className='w-[60%] h-[20%] object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Deepseek</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('llama')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/platypus.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Platypus2</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('gemma')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/google-logo.png" alt="Gemma" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gemma</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('gemma')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/mythomax.png" alt="Gemma" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>MythoMax</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('gemma')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/openchat.png" alt="Gemma" className='w-[83%] h-[27%] flex items-center justify-center object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>OpenChat</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('gemma')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] 2xl:text-[20px] text-white'>TM</p>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Toppy-M</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('gemma')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/yi-logo.png" alt="Gemma" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Yi Chat</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('gemini')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/gemini-logo.png" alt="Gemini" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gemini</p>
                                </div>
                                
                                {/* added new end */}

                                {/* <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('cohere')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/cohere-logo.png" alt="Cohere" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Cohere</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('zephyr')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/zephyr-logo.png" alt="Zephyr" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Zephyr</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('phi')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/microsoft-logo.png" alt="Phi" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Phi</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('gemini')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/gemini-logo.png" alt="Gemini" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gemini</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('llama')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/llama.jpeg" alt="LLama" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>LLama</p>
                                </div> */}

                            </div>
                        </div>
                    </div>

                    {/* Image generative models */}
                    <div className='row-span-1'>
                        <p className='font-inter text-[15px] 2xl:text-[20px] font-medium ml-3 py-2'>Image Generation</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} flex flex-col items-center justify-center shadow-2xl w-full 2xl:w-3/4 mb-8 border-2 ${lightTheme ? 'border-[#cecece]' : 'border-none'}`}>
                            <p className={`font-inter font-medium mb-6 text-[14px] 2xl:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} w-[90%] text-center 2xl:text-left`}>Image Generative Models</p>

                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full 2xl:w-calc(w-3/4 - 20px)'>
                            <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('pollinations')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/pollination.png" alt="Pollinations" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Pollinations</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('dalle')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:text-gray-300 transition-all'>
                                        <img src="Assets/dalle.png" alt="Dall-E" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Dall-E</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('sd')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#ce9000] hover:bg-[#ce9000e4] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] 2xl:text-[20px] text-white'>SD</p>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] e-full text-center ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Stable Diffusion</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('sdxl')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#ce4f00] hover:bg-[#ce4f00e3] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] text-white 2xl:text-[20px]'>SDXL</p>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] e-full text-center ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Stable Diffusion XL</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('prodia')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#ce4f00] hover:bg-[#ce4f00e3] hover:text-gray-300 transition-all'>
                                        <img src="Assets/prodia.png" alt="prodia" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] e-full text-center ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Prodia</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('sdxl')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#ce4f00] hover:bg-[#ce4f00e3] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] text-white 2xl:text-[20px]'>RV</p>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] e-full text-center ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Realistic Vision</p>
                                </div>
                                
                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('sdxl')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#ce4f00] hover:bg-[#ce4f00e3] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] text-white 2xl:text-[20px]'>OJ</p>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] e-full text-center ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Open Journey</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:opacity-80 my-2' onClick={() => navigate('sdxl')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#ce4f00] hover:bg-[#ce4f00e3] hover:text-gray-300 transition-all'>
                                        <p className='font-inter font-semibold text-[14px] text-white 2xl:text-[20px]'>AS</p>
                                    </div>
                                    <p className={`font-inter text-[13px] pt-1 2xl:text-[16px] e-full text-center ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Analog Diffusion</p>
                                </div>
                            </div>
                        </div>    
                    </div>

                    {/* models for fun */}
                    <div className='row-span-1'>
                        <p className='font-inter text-[15px] 2xl:text-[20px] font-medium ml-3 py-2'>Assistants</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} flex flex-col items-center justify-center shadow-2xl w-full 2xl:w-3/4 mb-8 border-2 ${lightTheme ? 'border-[#cecece]' : 'border-none'}`}>
                            <p className={`font-inter font-medium mb-6 text-[14px] 2xl:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} w-[90%] text-center 2xl:text-left`}>Fine-tunned assistants</p>

                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full 2xl:w-calc(w-3/4 - 20px)'>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('human')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/human-logo.jpeg" alt="Human" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Human</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('mario')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/mario.jpg" alt="mario" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Super Mario</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('strange')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/strange.jpeg" alt="Dr. Stranger" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Dr. Strange</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('walter')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/walter.png" alt="Walter White" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Walter White</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row-span-1'>
                        <p className='font-inter text-[15px] 2xl:text-[20px] font-medium ml-3 py-2'>Reverse Engineerd GPTs (3rd Party)</p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} flex flex-col items-center justify-center shadow-2xl w-full 2xl:w-3/4 mb-8 border-2 ${lightTheme ? 'border-[#cecece]' : 'border-none'} font-inter`}>
                            <p className={`font-medium mb-6 text-[14px] 2xl:text-[17px] px-5 py-2 rounded-[20px] ${lightTheme ? 'bg-[#dbdbdb]' : 'bg-[#1e1e1e]'} w-[90%] text-center 2xl:text-left`}><span className='text-[#7eb9a9]'>GPT</span> models</p>
                            
                            <p className='text-[13px] 2xl:text-[16px] p-2 pb-5'><span className='font-bold'>Note:&nbsp;</span>These models may act unusual sometimes</p>

                            <div className='grid grid-cols-4 items-start justify-center gap-2 w-full 2xl:w-calc(w-3/4 - 20px)'>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chatgpt-3.5-turbo')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gpt-3.5-turbo</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chatgpt-3')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Gpt-3</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chatgpt-curie')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Curie</p>
                                </div>

                                <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer my-2' onClick={() => navigate('chatgpt-davinci')}>
                                    <div className='w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full overflow-hidden border-[1px] border-[#737373] bg-[#1f1f1f] hover:bg-[#363636] hover:opacity-70 transition-all'>
                                        <img src="Assets/chatgpt.jpg" alt="gpt" className='w-full h-full object-cover'/>
                                    </div>
                                    <p className={`font-inter text-center text-[13px] pt-1 2xl:text-[16px] ${lightTheme ? 'text-black' : 'text-gray-300'}`}>Davinci</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='row-span-1'>
                        <p className='font-inter text-[15px] 2xl:text-[20px] font-medium ml-3 py-2'>Check out the bot on <span className='text-[#24A1DE]'>telegram!</span></p>
                        <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} flex items-center justify-center shadow-2xl w-full 2xl:w-3/4 mb-8 border-2 ${lightTheme ? 'border-[#cecece]' : 'border-none'} font-inter`}>
                            <img src="Assets/pngwing.png" alt="telegram" className='animate-tele w-[100px] relative 2xl:w-[180px] object-cover'/>
                            <div className='flex flex-col items-center justify-center gap-3'>
                                <p className='font-inter text-[13px] 2xl:text-[17px]'><span className='text-[#24A1DE]'>@modelmatebot</span> on telegram</p>
                                <Link className={`rounded-2xl text-[15px] 2xl:text-[17px] ${lightTheme ? 'bg-[#d6d6d6]' : 'bg-[#1e1e1e]'} px-4 py-2 hover:opacity-80`} to='https://t.me/modelmatebot' target='__blank'>Redirect to telegram bot? Click me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainActionLanding