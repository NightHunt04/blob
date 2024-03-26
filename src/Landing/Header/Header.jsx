import { LinearGradient as Lg } from 'react-text-gradients'

function Header() {
    return (
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
    )
}

export default Header