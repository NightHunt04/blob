import axios from "axios"

async function useGPT({ prompt, model }) {
    const response = await axios.post('https://nexra.aryahcr.cc/api/chat/gpt', {
        messages: [],
        prompt: prompt,
        model: model,
        markdown: false
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if(response.status === 200){
            console.log(response.data.gpt)
            return response.data.gpt
        } else {
            console.log("Error")
            return 'error: Something went wrong'
        }
    }).catch(error => {
        console.error('Error:', error)
        return 'error : Something went wrong'
    })

    return response
}

export default useGPT