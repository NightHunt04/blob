import axios from "axios"

async function useGenPollinationsImg({ prompt }) {
    const BASE_URL = import.meta.env.VITE_APP_ADMIN_POLLINATIONS_BASE_URL
    try{
        const response = await axios.post(BASE_URL, { 'prompt' : prompt, 'model' : '10' })
        console.log(response.data.response)
        return response.data.response
        // return `https://image.pollinations.ai/prompt/photorealistic%20${prompt}`
    } catch(error) {
        return 'ERROR'
    }
}

export default useGenPollinationsImg