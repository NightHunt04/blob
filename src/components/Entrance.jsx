import { useModelContext } from "../context/ModelContext"

function Entrance() {
    const { entrance, toggleEntrance } = useModelContext()
    const handleEntrance = () => {
        toggleEntrance()
    }

    return (
        <div className={`${entrance ? 'fixed' : 'hidden'} bg-gray-700 mx-auto backdrop-blur overflow-hidden translate-y-1/2 flex flex-col items-center justify-center z-30 w-9/12 min-h-1/2 md:w-[600px] md:h-[600px] px-4 py-3 rounded-lg shadow-2xl text-white font-inter`}>
            <div className="relative w-full flex flex-col items-center justify-center h-full">
            
            <i className="fa-solid fa-rectangle-xmark absolute right-0 top-0 text-[18px] md:text-[20px] outline-none border-none text-gray-200 hover:cursor-pointer hover:text-red-500 transition-all" onClick={handleEntrance}></i>

            <p className="font-medium text-white-800 py-3 text-[20px]">Sign Up</p>

            <div className="relative w-9/12 flex flex-col items-center justify-center z-30 my-4">
                <input 
                    type="email" 
                    placeholder="Email"
                    className="peer border-b-2 text-[16px] md:text-[19px] placeholder-transparent bg-transparent border-gray-300 w-full px-3 h-10 py-2 focus:border-red-600 focus:outline-none"/>
                <label 
                    htmlFor="email"
                    className="absolute transition-all left-0 -top-4 px-3 text-gray-400 text-[15px] peer-placeholder-shown:text-[17px] md:peer-placeholder-shown:text-[19px] peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2">Email</label>
            </div>

            <div className="relative w-9/12 flex flex-col items-center justify-center z-30 my-4">
                <input 
                    type="text" 
                    placeholder="Username"
                    className="peer border-b-2 text-[16px] md:text-[19px] placeholder-transparent bg-transparent border-gray-300 w-full px-3 h-10 py-2 focus:border-red-600 focus:outline-none"/>
                <label 
                    htmlFor="text"
                    className="absolute transition-all left-0 -top-4 px-3 text-gray-400 text-[15px] peer-placeholder-shown:text-[17px] md:peer-placeholder-shown:text-[19px] peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2">Set Username</label>
            </div>

            <div className="relative w-9/12 flex flex-col items-center justify-center z-30 my-4">
                <input 
                    type="password" 
                    placeholder="Password"
                    className="peer border-b-2 text-[16px] md:text-[19px] placeholder-transparent bg-transparent border-gray-300 w-full px-3 h-10 py-2 focus:border-red-600 focus:outline-none"/>
                <label 
                    htmlFor="password"
                    className="absolute transition-all left-0 -top-4 px-3 text-gray-400 text-[15px] peer-placeholder-shown:text-[17px] md:peer-placeholder-shown:text-[19px] peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2">Set Password</label>
            </div>

            <div className="relative w-9/12 flex flex-col items-center justify-center z-30 my-4">
                <input 
                    type="password" 
                    placeholder="Password"
                    className="peer border-b-2 text-[16px] md:text-[19px] placeholder-transparent bg-transparent border-gray-300 w-full px-3 h-10 py-2 focus:border-red-600 focus:outline-none"/>
                <label 
                    htmlFor="password"
                    className="absolute transition-all left-0 -top-4 px-3 text-gray-400 text-[15px] peer-placeholder-shown:text-[17px] md:peer-placeholder-shown:text-[19px] peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2">Confirm password</label>
            </div>

            <button className="bg-gray-800 outline-none border-none text-gray-300 z-30 rounded-2xl px-3 py-1 md:px-6 md:py-3 mt-5 hover:text-white hover:bg-gray-900 transition-all">Sign Up</button>

            <p className="py-3 hover:cursor-pointer z-30 text-gray-300 transition-all hover:text-yellow-600">Already have an account? Log in?</p>

            </div> 

            
        </div>
    )
}   

export default Entrance