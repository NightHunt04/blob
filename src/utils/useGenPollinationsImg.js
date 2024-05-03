import axios from "axios"

async function useGenPollinationsImg({ prompt }) {
    const BASE_URL = 'https://admin1334.pythonanywhere.com/hug'
    const params = {
        'prompt' : prompt,
        'model' : '10'
    }

    const response = await axios.get(BASE_URL, { params : params })
    return response.data.response
}

export default useGenPollinationsImg