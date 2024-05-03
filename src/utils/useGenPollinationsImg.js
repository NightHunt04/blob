import axios from "axios"

async function useGenPollinationsImg({ prompt }) {
    const BASE_URL = import.meta.env.VITE_APP_ADMIN_POLLINATIONS_BASE_URL
    const params = {
        'prompt' : prompt,
        'model' : '10'
    }

    const response = await axios.get(BASE_URL, { params : params })
    return response.data.response
}

export default useGenPollinationsImg