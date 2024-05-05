import axios from "axios"

async function useQwertyModelNonTunned({ prompt, modelId }) {
    const options = {
        method: 'POST',
        url: import.meta.env.VITE_APP_QWERTY_BASE_URL,
        params: {
          model_id: modelId,
          prompt: prompt
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'models3.p.rapidapi.com'
        },
      }
      
      try {
          const response = await axios.request(options);
          console.log(response.data)
          const result = response.data
          return { code : result.code, text : result.content }
      } catch (error) {
          console.error(error)
      }
}

export default useQwertyModelNonTunned