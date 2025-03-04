import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { MyRoutes } from './App.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={MyRoutes} />
 
)
