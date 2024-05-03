import axios from "axios"

async function useGenPollinationsImg({ prompt }) {
    const BASE_URL = import.meta.env.VITE_APP_ADMIN_POLLINATIONS_BASE_URL
    const params = {
        'prompt' : prompt,
        'model' : '10'
    }

    try{
        const response = await axios.get(BASE_URL, { params : params })
        return response.data.response
    } catch(error) {
        return 'ERROR'
    }
}

export default useGenPollinationsImg