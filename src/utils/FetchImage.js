import axios from "axios"

async function FetchImage({ taskId, requestId }) {
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    let options_gen = {
        method: 'POST',
        url: import.meta.env.VITE_APP_MODELS3_FETCH_IMAGE_BASE_URL,
        params: {
            task_id: '(write in body)task_id from request image generation ',
            request_id: '(write in body)request_id from request image generation'
        },
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'models3.p.rapidapi.com'
        },
        data: {
            task_id: taskId,
            request_id: requestId
        }
    }
    while(true) {
        try {
            let response_gen = await axios.request(options_gen)
            console.log(response_gen.data)

            if(response_gen.data.message === 'finished') {
                // setImageURL(response_gen.data.img_urls)
                return { imageURL: response_gen.data.img_urls, status: 1 }
            }
        } catch (error) {
            console.error(error)
            return { imageURL: error, status: 0 }
        }
        await sleep(5000)
    }
}

export default FetchImage