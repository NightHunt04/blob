import axios from "axios"

async function usePixArt({ prompt }) {
    prompt = prompt.trim().replace(' ', '+').trim()
    const API = import.meta.env.VITE_APP_KASTG_API
    const URL = import.meta.env.VITE_APP_PIXART_BASE_URL + `&key=${API}&prompt=${prompt}`

    const options = {
        method: 'POST',
        url: import.meta.env.VITE_APP_CORS_PROXY_BASE_URL,
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
          'x-rapidapi-host': 'http-cors-proxy.p.rapidapi.com',
          'Content-Type': 'application/json',
          Origin: 'www.example.com',
          'X-Requested-With': 'www.example.com'
        },
        data: {
          url: URL
        }
      };

    try {
        const response = await axios.request(options)
        return response.data.result[0].url
    } catch (error) {
        console.error(error)
        return 'ERROR'
    }
}

export default usePixArt