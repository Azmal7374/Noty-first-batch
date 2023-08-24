import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home/Home/Home.jsx'
import Main from './Layout/Main.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
