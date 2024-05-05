import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai"

async function useGeminiChatModel({ prompt }) {
  const MODEL_NAME = "gemini-1.0-pro"
  const API_KEY = import.meta.env.VITE_APP_GEMINI_API_KEY
  
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 0.9,
      topK: 0,
      topP: 1,
      maxOutputTokens: 2048,
    }
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
      },
    ]
  
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    })
  
    try {
      const result = await chat.sendMessage(prompt)
      const response = result.response
      return { response : response.text(), code : 2 }
    } catch(error) {
      console.log(error)
      return { response : null, code : 1 }
    }
}

export default useGeminiChatModel