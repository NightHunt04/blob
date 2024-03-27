import { LinearGradient as Lg } from 'react-text-gradients'
import { useState } from 'react'
import { useModelContext } from '../../context/ModelContext'

function Header() {
    const { lightTheme, toggleLightTheme } = useModelContext()

    return (
        <div className='flex items-center justify-between px-[30px] md:px-[94px] w-full pt-6 md:pt-10 cursor-pointer'>
            <h1 className='text-[24px] md:text-[30px] font-bold font-roboto-serif'>
                <Lg gradient={['to right', '#c2e59c, #be5869']}>
                m.
                </Lg>
            </h1>
            <div className='flex items-center justify-center gap-4'>
                <div className={`flex items-center justify-center w-[30px] h-[30px] md:w-[40px] md:h-[40px] ${lightTheme ? 'bg-slate-900 text-gray-300' : 'bg-gray-400 text-gray-900'} rounded-full border-gray-500 border-2`} onClick={toggleLightTheme}>
                    <i className={`fa-solid ${lightTheme ? 'fa-moon' : 'fa-sun'}`}></i>
                </div>
                <button className='bg-[#505050] font-inter text-[14px] md:text-[17px] px-[17px] py-[4px] md:px-[20px] md:py-[6px] rounded-[28px] text-[#EBEBEB] hover:opacity-80'>
                    Login / Sign in
                </button>
            </div>
        </div>
    )
}

export default Header