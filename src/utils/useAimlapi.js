import axios from "axios"

async function useAimlapi({ prompt, modelId} ) {
  console.log(prompt, modelId)
    const models = [
                    'gpt-4o', 
                    'gpt-4', 
                    'gpt-3.5-turbo',
                    'mistralai/Mixtral-8x7B-Instruct-v0.1',
                    'mistralai/Mistral-7B-Instruct-v0.2',
                    'mistralai/Mistral-7B-Instruct-v0.1',
                    'Austism/chronos-hermes-13b',
                    'cognitivecomputations/dolphin-2.5-mixtral-8x7b',
                    'deepseek-ai/deepseek-llm-67b-chat',
                    'garage-bAInd/Platypus2-70B-instruct',
                    'google/gemma-2b-it',
                    'Gryphe/MythoMax-L2-13b',
                    'lmsys/vicuna-7b-v1.5',
                    'lmsys/vicuna-13b-v1.5',
                    'meta-llama/Llama-3-70b-chat-hf',
                    'meta-llama/Llama-3-8b-chat-hf',
                    'meta-llama/Llama-2-13b-chat-hf',
                    'meta-llama/Llama-2-7b-chat-hf',
                    'codellama/CodeLlama-7b-Instruct-hf',
                    'codellama/CodeLlama-13b-Instruct-hf', 
                    'codellama/CodeLlama-34b-Instruct-hf', 
                    'codellama/CodeLlama-70b-Instruct-hf',
                    'NousResearch/Nous-Hermes-2-Yi-34B',
                    'NousResearch/Nous-Hermes-2-Mixtral-8x7B-SFT',
                    'NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO',
                    'openchat/openchat-3.5-1210',
                    'Open-Orca/Mistral-7B-OpenOrca',
                    'Qwen/Qwen1.5-14B-Chat', 
                    'Qwen/Qwen1.5-7B-Chat', 
                    'Qwen/Qwen1.5-4B-Chat', 
                    'Qwen/Qwen1.5-1.8B-Chat',
                    'Undi95/Toppy-M-7B', 
                    'zero-one-ai/Yi-34B-Chat'
                ]

    const options = {
        method: 'POST',
        url: 'https://ai-ml-api2.p.rapidapi.com/completion',
        headers: {
          'x-rapidapi-key': '7264c0698emsh8e04d51884fb66ep1a08f0jsnd21ad7509f71',
          'x-rapidapi-host': 'ai-ml-api2.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          model: models[modelId],
          message: prompt,
          prompt: 'You are helpful assistant.'
        }
    }
      
      try {
          const response = await axios.request(options)
          return response
        } catch (error) {
          console.error(error)
      }
}

export default useAimlapi