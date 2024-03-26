import { LinearGradient as Lg } from 'react-text-gradients'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="flex items-center justify-between w-full px-[40px] md:px-[94px] font-inter pt-[160px] pb-6">
            <div className='flex flex-col items-start justify-center'>
                <div>
                    <span className='text-[18px] md:text-[22px] font-bold font-roboto-serif'>
                        <Lg gradient={['to right', '#c2e59c, #be5869']}>
                            Model
                        </Lg>
                    </span>
                    <span className='text-[18px] md:text-[22px] font-bold font-roboto-serif text-[#555555]'>Mate</span>
                </div>
                <div>
                    <p className='text-[14px] md:text-[17px] text-[#555555]'>By Jeet</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Link to='https://github.com/NightHunt04' target='_blank' className='px-2'>
                    <i className="fa-brands fa-github text-gray-300 text-[20px]"></i>
                </Link>
                <Link to="https://instagram.com/jeet._004" target='_blank' className='px-2'>
                    <i className="fa-brands fa-instagram text-gray-300 text-[20px]"></i>
                </Link>
                <Link to='https://www.linkedin.com/in/jeet-bherwani-61aa37251/' target='_blank' className='px-2'>
                    <i className="fa-brands fa-linkedin text-gray-300 text-[20px]"></i>
                </Link>
            </div>
        </div>
    )
}

export default Footer