import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainActionPage from './components/MainActionPage/MainActionPage.jsx'
import ChatModel from './components/ChatModel/ChatModel.jsx'
import APIRef from './components/NavBarComponents/APIRef.jsx'
import About from './components/NavBarComponents/About.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
  },
  {
    path : '/action',
    element : <MainActionPage />,
  },
  // gpt
  {
    path: 'action/chatgpt-4o',
    element: <ChatModel 
              modelName={'Gpt-4o'}
              modelDescription={'Know more about OpenAI on their site: https://openai.com/en-GB/'}
              modelImage={'../Assets/chatgpt.jpg'}
              modelTitleColor={'text-[#00B48A]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/chatgpt-4',
    element: <ChatModel 
              modelName={'Gpt-4'}
              modelDescription={'Know more about OpenAI on their site: https://openai.com/en-GB/'}
              modelImage={'../Assets/chatgpt.jpg'}
              modelTitleColor={'text-[#00B48A]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/chatgpt-3.5-turbo-r',
    element: <ChatModel 
              modelName={'Gpt-3.5 Turbo'}
              modelDescription={'Know more about OpenAI on their site: https://openai.com/en-GB/'}
              modelImage={'../Assets/chatgpt.jpg'}
              modelTitleColor={'text-[#00B48A]'}
              isImageGenerator={false}/>
  },

  // Mistral 
  {
    path : 'action/mistral-7b-v0.1',
    element: <ChatModel 
              modelName={'Mistral 7B v0.1'} 
              modelDescription={`Know about Mistral on there site: https://mistral.ai/`} 
              modelImage={'../Assets/mistral-7b.jpeg'} 
              modelTitleColor={'text-[#ff9e29]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/mistral-7b-v0.2',
    element: <ChatModel 
              modelName={'Mistral 7B v0.2'} 
              modelDescription={`Know about Mistral on there site: https://mistral.ai/`} 
              modelImage={'../Assets/mistral-7b.jpeg'} 
              modelTitleColor={'text-[#ff9e29]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/mistral-8x7b',
    element: <ChatModel 
              modelName={'Mistral 8x7B'} 
              modelDescription={`Know about Mistral on there site: https://mistral.ai/`} 
              modelImage={'../Assets/mistral-7b.jpeg'} 
              modelTitleColor={'text-[#ff9e29]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/mistral-openocra',
    element: <ChatModel 
              modelName={'Mistral OpenOcra'} 
              modelDescription={`Know about Mistral on there site: https://mistral.ai/`} 
              modelImage={'../Assets/ocra.png'} 
              modelTitleColor={'text-[#ff9e29]'}
              isImageGenerator={false}/>
  },

  // Hermes
  {
    path : 'action/openhermes',
    element: <ChatModel 
              modelName={'OpenHermes'} 
              modelDescription={'OpenHermes has been trained on a wide variety of texts, including lots of information about computer code. This training makes it particularly good at understanding and generating text related to programming, in addition to its general language skills.'} 
              modelImage={'../Assets/openhermes.jpg'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/noushermes-yi',
    element: <ChatModel 
              modelName={'NouseHermes Yi'} 
              modelDescription={'Know about NousHermes Yi here: https://huggingface.co/NousResearch/Nous-Hermes-2-Yi-34B'} 
              modelImage={'../Assets/nous.jpeg'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/noushermes-sft',
    element: <ChatModel 
              modelName={'NouseHermes SFT'} 
              modelDescription={'Know about NouseHermes SFT here: https://huggingface.co/NousResearch/Nous-Hermes-2-Mixtral-8x7B-SFT'} 
              modelImage={'../Assets/nous-sft.jpeg'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/noushermes-dpo',
    element: <ChatModel 
              modelName={'NouseHermes DPO'} 
              modelDescription={'Know about NousHermes DPO here: https://huggingface.co/NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO'} 
              modelImage={'../Assets/nous-sft.jpeg'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/chronoshermes',
    element: <ChatModel 
              modelName={'ChronosHermes'} 
              modelDescription={'Know about ChronosHermes here: https://huggingface.co/Austism/chronos-hermes-13b'} 
              modelImage={'../Assets/chronosHermes.png'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },

  // llama
  {
    path: 'action/llama-3-70b',
    element: <ChatModel 
              modelName={'LLama 3 70B'}
              modelDescription={'Know about LLama here: https://llama.meta.com/'}
              modelImage={'../Assets/llama.jpeg'}
              modelTitleColor={'text-[#FFA500]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/llama-3-8b',
    element: <ChatModel 
              modelName={'LLama 3 8B'}
              modelDescription={'Know about LLama here: https://llama.meta.com/'}
              modelImage={'../Assets/llama.jpeg'}
              modelTitleColor={'text-[#FFA500]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/llama-2-13b',
    element: <ChatModel 
              modelName={'LLama 2 13B'}
              modelDescription={'Know about LLama here: https://llama.meta.com/'}
              modelImage={'../Assets/llama.jpeg'}
              modelTitleColor={'text-[#FFA500]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/llama-2-7b',
    element: <ChatModel 
              modelName={'LLama 2 7B'}
              modelDescription={'Know about LLama here: https://llama.meta.com/'}
              modelImage={'../Assets/llama.jpeg'}
              modelTitleColor={'text-[#FFA500]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/codellama-70b',
    element: <ChatModel 
              modelName={'CodeLLama 70B'}
              modelDescription={'Know about LLama here: https://llama.meta.com/'}
              modelImage={'../Assets/llama.jpeg'}
              modelTitleColor={'text-[#FFA500]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/codellama-34b',
    element: <ChatModel 
              modelName={'CodeLLama 34B'}
              modelDescription={'Know about LLama here: https://llama.meta.com/'}
              modelImage={'../Assets/llama.jpeg'}
              modelTitleColor={'text-[#FFA500]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/codellama-13b',
    element: <ChatModel 
              modelName={'CodeLLama 13B'}
              modelDescription={'Know about LLama here: https://llama.meta.com/'}
              modelImage={'../Assets/llama.jpeg'}
              modelTitleColor={'text-[#FFA500]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/codellama-7b',
    element: <ChatModel 
              modelName={'CodeLLama 7B'}
              modelDescription={'Know about LLama here: https://llama.meta.com/'}
              modelImage={'../Assets/llama.jpeg'}
              modelTitleColor={'text-[#FFA500]'}
              isImageGenerator={false}/>
  },

  // vicuna
  {
    path : 'action/vicuna-7b',
    element: <ChatModel 
              modelName={'Vicuna 7B'} 
              modelDescription={'Know about Vicuna 7B here: https://huggingface.co/lmsys/vicuna-7b-v1.5'} 
              modelImage={'0'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/vicuna-13b',
    element: <ChatModel 
              modelName={'Vicuna 13B'} 
              modelDescription={'Know about Vicuna 7B here: https://huggingface.co/lmsys/vicuna-13b-v1.5'} 
              modelImage={'0'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },

  // qwen
  {
    path : 'action/qwen-14b',
    element: <ChatModel 
              modelName={'Qwen 14B'} 
              modelDescription={'Know about Qwen 14B here: https://huggingface.co/Qwen/Qwen1.5-14B-Chat'} 
              modelImage={'0'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/qwen-7b',
    element: <ChatModel 
              modelName={'Qwen 7B'} 
              modelDescription={'Know about Qwen 7B here: https://huggingface.co/Qwen/Qwen1.5-7B-Chat'} 
              modelImage={'0'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/qwen-4b',
    element: <ChatModel 
              modelName={'Qwen 4B'} 
              modelDescription={'Know about Qwen 4B here: https://huggingface.co/Qwen/Qwen1.5-4B-Chat'} 
              modelImage={'0'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/qwen-1.8b',
    element: <ChatModel 
              modelName={'Qwen 1.8B'} 
              modelDescription={'Know about Qwen 1.8B here: https://huggingface.co/Qwen/Qwen1.5-1.8B-Chat'} 
              modelImage={'0'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },

  // other models
  {
    path : 'action/dolphin',
    element: <ChatModel 
              modelName={'Dolphin 2.5 Mixtral 8x7b'} 
              modelDescription={'Know about Delphin here: https://huggingface.co/TheBloke/dolphin-2.5-mixtral-8x7b-GGUF'} 
              modelImage={'../Assets/dolphin.jpeg'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/deepseek',
    element: <ChatModel 
              modelName={'Deepseek 67b'} 
              modelDescription={'Know about Deepseek here: https://huggingface.co/deepseek-ai/deepseek-llm-67b-chat'} 
              modelImage={'../Assets/deepseek.png'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/platypus2',
    element: <ChatModel 
              modelName={'Platypus2 70B'} 
              modelDescription={'Know about Platypus here: https://huggingface.co/garage-bAInd/Platypus2-70B-instruct'} 
              modelImage={'../Assets/platypus.jpeg'} 
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/gemma',
    element: <ChatModel 
              modelName={'Gemma'}
              modelDescription={"Gemma models draw inspiration and technological lineage from the Gemini family of models, and are made for the AI development community to extend and take further."}
              modelImage={'../Assets/google-logo.png'}
              modelTitleColor={'text-[#ADD8E6]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/mythomax',
    element: <ChatModel 
              modelName={'MythoMax 13B'}
              modelDescription={"Know about MythoMax here: https://huggingface.co/Gryphe/MythoMax-L2-13b"}
              modelImage={'../Assets/mythomax.png'}
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/openchat',
    element: <ChatModel 
              modelName={'OpenChat'}
              modelDescription={"Know about OpenChat here: https://huggingface.co/openchat/openchat-3.5-1210"}
              modelImage={'../Assets/openchat.png'}
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/toppy',
    element: <ChatModel 
              modelName={'Toppy-M'}
              modelDescription={"Know about Toppy-M here: https://huggingface.co/Undi95/Toppy-M-7B"}
              modelImage={'0'}
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/yi',
    element: <ChatModel 
              modelName={'Yi Chat'}
              modelDescription={"Know about Yi Chat here: https://huggingface.co/01-ai/Yi-34B-Chat"}
              modelImage={'../Assets/yi-logo.png'}
              modelTitleColor={'text-[#B2BEB5]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/gemini',
    element: <ChatModel 
              modelName={'Gemini'}
              modelDescription={'Gemini AI is an artificial intelligence company that develops advanced natural language processing (NLP) technology. It was developed by a team of AI researchers and engineers. In short, Gemini AI provides cutting-edge solutions for conversational agents and text analysis, empowering businesses and individuals with powerful AI-driven capabilities.'}
              modelImage={'../Assets/gemini.png'}
              modelTitleColor={'text-[#0055FF]'}
              isImageGenerator={false}/>
  },

  // 3rd party gpt
  {
    path: 'action/chatgpt-3.5-turbo',
    element: <ChatModel 
              modelName={'GPT-3.5-Turbo'}
              modelDescription={''}
              modelImage={'../Assets/chatgpt.jpg'}
              modelTitleColor={'text-[#00B48A]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/chatgpt-3',
    element: <ChatModel 
              modelName={'GPT-3'}
              modelDescription={''}
              modelImage={'../Assets/chatgpt.jpg'}
              modelTitleColor={'text-[#00B48A]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/chatgpt-curie',
    element: <ChatModel 
              modelName={'Curie'}
              modelDescription={''}
              modelImage={'../Assets/chatgpt.jpg'}
              modelTitleColor={'text-[#00B48A]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/chatgpt-davinci',
    element: <ChatModel 
              modelName={'Davinci'}
              modelDescription={''}
              modelImage={'../Assets/chatgpt.jpg'}
              modelTitleColor={'text-[#00B48A]'}
              isImageGenerator={false}/>
  },
  // {
  //   path: 'action/cohere',
  //   element: <ChatModel 
  //             modelName={'Coral'}
  //             modelDescription={"Cohere is an AI company that specializes in large language models (LLMs). Cohere's platform offers developers access to pre-built LLMs that can perform common tasks on text input, such as summarizing, classifying, and finding similarities in content. Developers can also create their own language models based on Cohere's work"}
  //             modelImage={'../Assets/cohere-logo.png'}
  //             modelTitleColor={'text-[#00B48A]'}
  //             isImageGenerator={false}/>
  // },
  // {
  //   path: 'action/zephyr',
  //   element: <ChatModel 
  //             modelName={'Zephyr'}
  //             modelDescription={"Zephyr is a series of language models that are trained to act as helpful assistants. Zephyr 141B-A39B is the latest model in the series, and is a fine-tuned version of mistral-community/Mixtral-8x22B-v0.1 that was trained using a novel alignment algorithm called Odds Ratio Preference Optimization (ORPO) with 7k instances for 1.3 hours on 4 nodes of 8 x H100s."}
  //             modelImage={'../Assets/zephyr-logo.png'}
  //             modelTitleColor={'text-[#0047AB]'}
  //             isImageGenerator={false}/>
  // },
  // {
  //   path: 'action/phi',
  //   element: <ChatModel 
  //             modelName={'Phi'}
  //             modelDescription={"It's a small AI model that's turning heads by showing that size isn't everything. Despite being much smaller than its counterparts, Phi can hold its own when it comes to understanding language and making sense of things."}
  //             modelImage={'../Assets/microsoft-logo.png'}
  //             modelTitleColor={'text-[#C70039]'}
  //             isImageGenerator={false}/>
  // },
  
  // {
  //   path: 'action/llama',
  //   element: <ChatModel 
  //             modelName={'LLama'}
  //             modelDescription={'Meta AI developed the Large Language Model (LLaMA) family of artificial intelligence (AI) models in February 2023. The first version of the model was released in four sizes: 7B, 13B, 33B, and 65 billion parameters. Meta announced Llama-2, the next generation of LLaMA, in partnership with Microsoft on July 18, 2023.'}
  //             modelImage={'../Assets/llama.jpeg'}
  //             modelTitleColor={'text-[#FFA500]'}
  //             isImageGenerator={false}/>
  // },
  {
    path: 'action/pollinations',
    element: <ChatModel 
              modelName={'Pollinations'}
              modelDescription={"Pollinations is designed to bridge the gap between AI and human creativity, and is intended for content creators, artists, and anyone interested in AI-assisted creation. The platform's team includes data scientists, machine-learning specialists, artists, and futurists."}
              modelImage={'../Assets/pollination.png'}
              modelTitleColor={'text-yellow-400'}
              isImageGenerator={true}
              showcaseImages={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRo4yLC0LiNnX0q8JOhyj9A9MhOGdcuwDfOA2UL7phg&s'}/>
  },
  {
    path: 'action/dalle',
    element: <ChatModel 
              modelName={'Dall-E'}
              modelDescription={'DALL-E is an artificial intelligence (AI) tool that generates images from text prompts in various styles, including paintings, emoji, and photorealistic imagery. It uses natural language processing (NLP), large language models (LLMs), and diffusion processing to create new images.'}
              modelImage={'../Assets/dalle.png'}
              modelTitleColor={'text-gray-400'}
              isImageGenerator={true}
              showcaseImages={'https://api.time.com/wp-content/uploads/2022/11/best-inventions-2022-OpenAI-DALL-E-2.jpg'}/>
  },
  {
    path: 'action/sd',
    element: <ChatModel 
              modelName={'SD'}
              modelDescription={"Stable Diffusion is open source and is a generative artificial intelligence (AI) model that creates photorealistic images from text prompts. It uses deep learning to generate images from text, and can also create videos and animations."}
              modelImage={'0'}
              modelTitleColor={'text-yellow-400'}
              isImageGenerator={true}
              showcaseImages={'https://cdm.link/app/uploads/2022/08/stablediffusion.jpg'}/>
  },
  {
    path: 'action/sdxl',
    element: <ChatModel 
              modelName={'SDXL'}
              modelDescription={"SDXL stands for Stable Diffusion XL, and it's an open-source text-to-image model that can generate high-resolution images from text prompts. SDXL uses deep learning techniques to interpret text descriptions and produce images that match the prompt's intent."}
              modelImage={'0'}
              modelTitleColor={'text-orange-400'}
              isImageGenerator={true}
              showcaseImages={'https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/01.png'}/>
  },
  {
    path: 'action/prodia',
    element: <ChatModel 
              modelName={'Prodia'}
              modelDescription={"Prodia Labs provides an AI-powered image generation API that allows you to easily integrate generative AI capabilities into your applications. Their Diffusion API leverages stable diffusion models to generate stunning visuals from text prompts within seconds."}
              modelImage={'../Assets/prodia.png'}
              modelTitleColor={'text-yellow-500'}
              isImageGenerator={true}
              showcaseImages={'https://framerusercontent.com/images/1R4HMVwOTPISKT7dGZl6dkkTVLo.png'}/>
  },
  {
    path : 'action/human',
    element: <ChatModel 
              modelName={'Human'} 
              modelDescription={'It just talks like a human.'} 
              modelImage={'../Assets/human-logo.jpeg'} 
              modelTitleColor={'text-gray-400'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/mario',
    element: <ChatModel 
              modelName={'Super Mario'} 
              modelDescription={"The main hero of the Mushroom Kingdom. Mario is always bright and cheerful and instantly recognizable with his blue overalls, red cap, and trademark moustache. He's a trusted friend of Princess Peach, and he and his brother Luigi are known across the land for their acts of bravery."} 
              modelImage={'../Assets/mario.jpg'} 
              modelTitleColor={'text-gray-400'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/strange',
    element: <ChatModel 
              modelName={'Dr. Strange'} 
              modelDescription={"Doctor Strange, also known as Stephen Strange, is a Marvel character and the Sorcerer Supreme, Earth's protector against mystical threats. He is a Master of the Mystic Arts with powerful magical abilities that allow him to cast spells, create shields and barriers, and bind opponents. He is also skilled in several martial arts, including judo, and can use magically conjured weapons like swords and axes."} 
              modelImage={'../Assets/strange.jpeg'} 
              modelTitleColor={'text-gray-400'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/walter',
    element: <ChatModel 
              modelName={'Walter White'} 
              modelDescription={"Walter White, also known as Walt, is a character in the TV series Breaking Bad and Better Call Saul. He is a brilliant, accomplished liar, and a former chemistry teacher and co-founder of a technology firm. Walter is kind, caring, and timid, but also demanding, calculating, and ruthless. He has a dual personality, and his pseudonym, Heisenberg, becomes an alter ego that allows him to live out his love of power."} 
              modelImage={'../Assets/walter.png'} 
              modelTitleColor={'text-gray-400'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/APIReference',
    element : <APIRef />
  },
  {
    path : 'action/about',
    element: <About />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
