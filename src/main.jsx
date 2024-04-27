import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandContent from './Landing/LandContent/LandContent.jsx'
import MainActionPage from './components/MainActionPage/MainActionPage.jsx'
import { ModelProvider } from './context/ModelContext' 
import ChatModel from './components/ChatModel/ChatModel.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
  },
  {
    path : 'action',
    element : <MainActionPage />,
  },
  {
    path : 'action/bot-1334',
    element: <ChatModel />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
