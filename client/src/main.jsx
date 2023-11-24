import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root')); // Crea una raíz

root.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);