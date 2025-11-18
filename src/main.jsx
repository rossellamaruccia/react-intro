import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewButton from './Button.jsx'
import NewImage from './Image.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <NewButton name="Rossella" />
    <br></br>
    <NewImage source ='src\assets\react.svg' />
    
  </StrictMode>,
)