import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Polo1} from './components/Polos/Polo1';
import {Polo2} from './components/Polos/Polo2';
import './index.css'
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App>
      <Polo1/>
      <Polo2/>
    </App>
    </BrowserRouter>
  </React.StrictMode>
)
