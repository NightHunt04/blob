import { LinearGradient as Lg } from 'react-text-gradients'
import { useModelContext } from '../../../context/ModelContext'
import { auth } from '../../../config/firebase'

function MainActionLanding() {
    const { lightTheme } = useModelContext()
    const displayName = localStorage.getItem('currentUserDisplayName')

    return (
        <div className="w-full flex flex-col items-start justify-center px-[20px] md:px-[100px] pt-5">
            <div className='md:flex items-center justify-center pb-7'>
                <p className="text-[#555555] font-bold font-roboto-serif text-[52px] md:text-[100px]">Hello,&nbsp;</p>
                <p className='font-bold font-roboto-serif text-[52px] md:text-[100px] -mt-3 leading-[55px]'><Lg gradient={['to right', '#ABDE73, #be5869']}>{displayName}</Lg></p>
            </div>
            <div className={`pt-6 md:pt-[50px] py-2 w-full ${lightTheme ? 'text-gray-900' : 'text-gray-300'}`}>
                <p className='font-inter text-[15px] md:text-[20px] font-medium ml-3 py-2'>My space</p>

                <div className={`px-3 py-5 rounded-[17px] ${lightTheme ? 'bg-[#efefef]' : 'bg-[#2c2c2c]'} shadow-lg w-full md:w-[850px]`}>
                    <div className='grid grid-cols-4 items-center justify-center gap-2 w-full md:w-[700px]'>
                        <div className='flex flex-col items-center justify-center gap-1 hover:cursor-pointer'>
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
        </div>
    )
}

export default MainActionLanding