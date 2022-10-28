import React from 'react'
import './App.css'
import foto from './assets/resilia.jpg';
import { Polo1 } from './components/Polos/Polo1';
import { Polo2 } from './components/Polos/Polo2';
import {Route, Routes, Link} from "react-router-dom";
import {Polos} from './components/PolosInicio/PolosInicio';


function App() {

  return (
    <div className="App">
        <div className='nav'>
        <h1 className='title'>Polos de Ensino Resilia</h1>
        </div>
        <div>
          <img src={foto}></img>
          <Link to='/polos'>
            <button className='buttonPolos'>Polos</button>
          </Link>
        </div>   
        <div>
          <Routes>
          <Route path='/polos'element ={<Polos/>}/>
          <Route path='/polo1'element ={<Polo1/>}/>
          <Route path='/polo2'element ={<Polo2/>}/>
          </Routes>
        </div>

      
    </div>
  )
}

export default App
