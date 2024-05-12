import { useNavigate } from "react-router-dom"
import { useModelContext } from "../../context/ModelContext"

function LogoutPopUp() {
    const { lightTheme, logoutPopUp, toggleLogoutPopUp } = useModelContext()
    const currentUserEmail = localStorage.getItem('currentUserEmail')
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('currentUserDisplayName')
        localStorage.removeItem('currentUserUUID')
        localStorage.removeItem('currentUserProfileURL')
        localStorage.removeItem('currentUserEmail')

        navigate('/')
    }

    return (
        <div className={`${logoutPopUp ? 'translate-y-[40px] md:translate-y-[180px]' : '-translate-y-[1000px]'} transition-all text-[15px] md:text-[17px] font-inter z-40 w-[300px] md:w-[730px] ${lightTheme ? 'bg-gray-100 text-gray-900' : 'bg-[#1d1d1d] text-gray-300'} shadow-2xl mx-auto top-[300px] rounded-xl fixed border-[1px] border-red-600`}>
            <div className="w-full h-full flex flex-col items-center justify-start">
                <p className="pt-5 px-4">Are you sure, you want to logout from the account <span className="text-[#d60000]">{currentUserEmail}</span>?</p>
                <p className="px-4">You will be redirected back to the home/landing page.</p>
                <div className="flex items-center justify-center gap-3 py-6">
                    <button className="px-4 md:px-10 py-1 bg-[#a90000] text-gray-300 rounded-[28px] hover:opacity-90" onClick={toggleLogoutPopUp}>Cancel</button>
                    <button className="px-4 md:px-10 py-1 bg-[#111111] text-gray-300 rounded-[28px] hover:opacity-90" onClick={handleLogOut}>I'm sure</button>
                </div>
            </div>
        </div>
    )
}

export default LogoutPopUp