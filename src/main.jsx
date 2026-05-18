import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/react-fontawesome'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  easing: 'ease-out-quart',
  once: true,
  offset: 50,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)