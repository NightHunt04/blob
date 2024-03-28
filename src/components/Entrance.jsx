import { useModelContext } from "../context/ModelContext"

function Entrance() {
    const { entrance } = useModelContext()

    return (
        <div className={`${entrance ? 'fixed' : 'hidden'} mx-auto backdrop-blur translate-y-1/2 flex items-center justify-center z-30 w-9/12 h-1/2 md:w-[600px] md:h-[600px] px-4 py-2 rounded-lg shadow-2xl bg-white`}>
            this is sign in
        </div>
    )
}   

export default Entrance