import axios from "axios"

async function useQwertyModelNonTunned({ prompt, modelId }) {
    const options = {
        method: 'POST',
        url: 'https://models3.p.rapidapi.com/',
        params: {
          model_id: modelId,
          prompt: prompt
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '7264c0698emsh8e04d51884fb66ep1a08f0jsnd21ad7509f71',
          'X-RapidAPI-Host': 'models3.p.rapidapi.com'
        },
        data: {
          key1: 'value',
          key2: 'value'
        }
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