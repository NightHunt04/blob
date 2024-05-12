import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainActionPage from './components/MainActionPage/MainActionPage.jsx'
import ChatModel from './components/ChatModel/ChatModel.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
  },
  {
    path : '/action',
    element : <MainActionPage />,
  },
  {
    path : 'action/openhermes',
    element: <ChatModel 
              modelName={'OpenHermes'} 
              modelDescription={'OpenHermes has been trained on a wide variety of texts, including lots of information about computer code. This training makes it particularly good at understanding and generating text related to programming, in addition to its general language skills.'} 
              modelImage={'../Assets/openhermes.jpg'} 
              modelTitleColor={'text-[#ff9e29]'}
              isImageGenerator={false}/>
  },
  {
    path : 'action/mistral-7b',
    element: <ChatModel 
              modelName={'Mistral 7B'} 
              modelDescription={'The Mistral 7B model is a high-performance glider by Nova Performance Paragliders, ideal for intermediate to advanced pilots seeking agility, speed, and stability for cross-country flying and competitions.'} 
              modelImage={'../Assets/mistral-7b.jpeg'} 
              modelTitleColor={'text-[#ff9e29]'}
              isImageGenerator={false}/>
  },
  // {
  //   path: 'action/chatgpt',
  //   element: <ChatModel 
  //             modelName={'ChatGPT'}
  //             modelDescription={'ChatGPT is an AI model developed by OpenAI for engaging in natural language conversations. It uses advanced techniques in natural language processing to generate coherent and contextually relevant responses, making it useful for a variety of applications.'}
  //             modelImage={'../Assets/chatgpt.jpg'}
  //             modelTitleColor={'text-[#00B48A]'}
  //             isImageGenerator={false}/>
  // },
  {
    path: 'action/cohere',
    element: <ChatModel 
              modelName={'Coral'}
              modelDescription={"Cohere is an AI company that specializes in large language models (LLMs). Cohere's platform offers developers access to pre-built LLMs that can perform common tasks on text input, such as summarizing, classifying, and finding similarities in content. Developers can also create their own language models based on Cohere's work"}
              modelImage={'../Assets/cohere-logo.png'}
              modelTitleColor={'text-[#00B48A]'}
              isImageGenerator={false}/>
  },
  {
    path: 'action/zephyr',
    element: <ChatModel 
              modelName={'Zephyr'}
              modelDescription={"Zephyr is a series of language models that are trained to act as helpful assistants. Zephyr 141B-A39B is the latest model in the series, and is a fine-tuned version of mistral-community/Mixtral-8x22B-v0.1 that was trained using a novel alignment algorithm called Odds Ratio Preference Optimization (ORPO) with 7k instances for 1.3 hours on 4 nodes of 8 x H100s."}
              modelImage={'../Assets/zephyr-logo.png'}
              modelTitleColor={'text-[#0047AB]'}
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
    path: 'action/phi',
    element: <ChatModel 
              modelName={'Phi'}
              modelDescription={"It's a small AI model that's turning heads by showing that size isn't everything. Despite being much smaller than its counterparts, Phi can hold its own when it comes to understanding language and making sense of things."}
              modelImage={'../Assets/microsoft-logo.png'}
              modelTitleColor={'text-[#C70039]'}
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
  {
    path: 'action/llama',
    element: <ChatModel 
              modelName={'LLama'}
              modelDescription={'Meta AI developed the Large Language Model (LLaMA) family of artificial intelligence (AI) models in February 2023. The first version of the model was released in four sizes: 7B, 13B, 33B, and 65 billion parameters. Meta announced Llama-2, the next generation of LLaMA, in partnership with Microsoft on July 18, 2023.'}
              modelImage={'../Assets/llama.jpeg'}
              modelTitleColor={'text-[#FFA500]'}
              isImageGenerator={false}/>
  },
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
    path : 'action/rahul-gandhi',
    element: <ChatModel 
              modelName={'Rahul Gandhi'} 
              modelDescription={'Rahul Gandhi, often described as the perennial "almost there" politician of India, is known for his knack of turning serious political debates into unintentional comedy gold. With a mix of earnestness and occasional gaffes, he keeps political pundits and social media meme-makers equally entertained.'} 
              modelImage={'../Assets/Rahul-Gandhi.jpeg'} 
              modelTitleColor={'text-[#337eff]'}
              isImageGenerator={false}/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
