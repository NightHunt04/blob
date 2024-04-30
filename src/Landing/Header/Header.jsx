import { LinearGradient as Lg } from 'react-text-gradients'
import { useModelContext } from '../../context/ModelContext'
import { auth, googleProvider } from '../../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Header() {
    const { lightTheme, toggleLightTheme } = useModelContext()
    const navigate = useNavigate()

    const handleEntrance = async() => {
        if(localStorage.getItem('currentUserDisplayName') === null) {
            try {
                await signInWithPopup(auth, googleProvider)
                console.log(`Name : ${auth?.currentUser?.displayName} \n'UID' : ${auth?.currentUser?.uid}`)
    
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
        <div className='flex items-center justify-between px-[30px] md:px-[94px] w-full pt-6 md:pt-10 cursor-pointer'>
            <h1 className='text-[24px] md:text-[30px] font-bold font-roboto-serif'>
                <Lg gradient={['to right', '#ABDE73, #be5869']}>
                m.
                </Lg>
            </h1>
            <div className='flex items-center justify-center gap-4'>
                <div className={`flex items-center justify-center w-[30px] h-[30px] md:w-[40px] md:h-[40px] ${lightTheme ? 'bg-slate-900 text-gray-300' : 'bg-gray-400 text-gray-900'} rounded-full border-gray-500 border-2`} onClick={toggleLightTheme}>
                    <i className={`fa-solid ${lightTheme ? 'fa-moon' : 'fa-sun'}`}></i>
                </div>
                <div className='relative group'>
                    <div className='absolute rounded-[28px] -inset-[1px] opacity-75 bg-gradient-to-r from-[#ABDE73] to-[#be5869]'></div>
                    <button className='relative bg-[#323232] group-hover:bg-[#282828] transition duration-300 font-inter text-[14px] md:text-[17px] px-[8px] py-[4px] md:px-[11px] md:py-[6px] rounded-[28px] text-[#dedede]' onClick={handleEntrance}>
                        {
                            localStorage.getItem('currentUserDisplayName') !== null ?
                                <div><span className='text-[14px] px-1 md:text-[16px] font-inter group-hover:text-white transition duration-200'>Go to action</span></div>
                            :
                                <div><i className="fa-brands fa-google px-1 text-[#DB4437]"></i> <span className='group-hover:text-white transition duration-200'>Sign in</span></div>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header