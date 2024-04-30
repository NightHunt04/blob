import axios from "axios"

async function useGenerateImage({prompt, model_id}) {      
    console.log('this is from util', typeof(model_id))  
    console.log(import.meta.env.VITE_APP_MODELS3_GEN_IMAGE_BASE_URL, import.meta.env.VITE_APP_RAPID_API_KEY)
    let options = {
        method: 'POST',
        url: import.meta.env.VITE_APP_MODELS3_GEN_IMAGE_BASE_URL,
        params: {
            model_id: '10 (write in body)',
            prompt: 'Positive Prompt (write in body)',
            negative_prompt: 'Negative Prompt (write in body)',
            num_images: '1 (write in body)'
        },
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'models3.p.rapidapi.com'
        },
        data: {
            model_id: String(model_id),
            prompt: prompt,
            negative_prompt: 'low quality, low resolution, ugly, deformed, non realistic, low detailed, bad lighting, nsfw, multiple hands, bad face, bad hands, bad body, bad shapes',
            num_images: 1
        }
    }

    try {
        const response = await axios.request(options)
        const task_id = response.data.task_id
        const request_id = response.data.request_id

        return { task_id, request_id }

    } catch (error) {
        console.error(error)

        return { task_id: 'ERROR', request_id: 'ERROR' }
    }
}

export default useGenerateImage