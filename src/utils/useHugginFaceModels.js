import axios from "axios"

async function useHuggingFaceModels({ prompt, model }) {
    const BASE_URL = import.meta.env.VITE_APP_ADMIN_HUG_MODELS_BASE_URL

    try {
        const response = await axios.post(BASE_URL, { prompt : prompt, model : model })
        return response
    } catch(error) {
        return response
    }
}

export default useHuggingFaceModels