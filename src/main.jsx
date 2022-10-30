import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Polo1} from './components/Polos/Polo1';
import {Polo2} from './components/Polos/Polo2';
import './index.css'
import {HashRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <App>
      <Polo1/>
      <Polo2/>
    </App>
    </HashRouter>
  </React.StrictMode>
)