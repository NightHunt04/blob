import { LinearGradient as Lg } from 'react-text-gradients'
import { useModelContext } from '../../../context/ModelContext'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const { lightTheme, toggleSettings, settings } = useModelContext()
    const navigateHome = () => {
        navigate('/')
    }
    const displayName = localStorage.getItem('currentUserDisplayName')
    const photoURL = localStorage.getItem('currentUserProfileURL')

    return (
        <div className={`flex items-center justify-between px-[30px] xl:px-[94px] w-full pt-6 pb-6 xl:pt-10 cursor-pointer ${lightTheme ? 'border-[#ababab]' : 'border-[#383838]'} border-b-2`}>
            <h1 className={`text-[24px] xl:text-[30px] font-bold font-roboto-serif px-2 rounded-full ${lightTheme ? 'bg-[#d5d5d5]' : ''}`} onClick={navigateHome}>
                <Lg gradient={['to right', '#ABDE73, #be5869']}>
                    m.
                </Lg>
            </h1>

            <div className="flex items-center justify-center gap-3">
                <div className={`flex items-center justify-center gap-2 ${lightTheme ? 'bg-[#c7c7c7] text-black' : 'bg-[#353535] text-[#ececec]'} px-2 xl:px-3 py-[4px] xl:py-[6px] rounded-[30px]`}>
                    <div className="w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] rounded-full overflow-hidden">
                        <img src={`${photoURL}`} alt="profile" className='w-full h-full object-cover rounded-full'/>
                    </div>
                    <p className={`font-inter text-[12.5px] xl:text-[14px]`}>{displayName}</p>
                </div>
                <button className={`setting-btn ${settings ? '-translate-y-3 -translate-x-[250px]' : ''} transition-all w-[34px] h-[34px] xl:w-[40px] xl:h-[40px] ${lightTheme ? 'bg-[#c7c7c7] text-black' : 'bg-[#353535] text-[#d4d4d4]'} hover:bg-[#303030] hover:text-[#d4d4d4] rounded-full flex items-center justify-center z-30 shadow-2xl`} onClick={toggleSettings}>
                    <i className={`fa-solid ${settings ? 'fa-circle-xmark xl:text-[18px]' : 'fa-gear xl:text-[17px]'} text-[15px]`}></i>
                </button>
            </div>
        </div>
    )
}

export default Header