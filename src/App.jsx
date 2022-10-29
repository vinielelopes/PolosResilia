import React from 'react'
import './App.css'
import foto from './assets/resilia.jpg';
import { Polo1 } from './components/Polos/Polo1';
import { Polo2 } from './components/Polos/Polo2';
import { Polo3 } from './components/Polos/Polo3';
import { Polo4 } from './components/Polos/Polo4';
import { Polo5 } from './components/Polos/Polo5';
import { Polo6 } from './components/Polos/Polo6';
import { Polo7 } from './components/Polos/Polo7';
import { Polo8 } from './components/Polos/Polo8';
import { Polo9 } from './components/Polos/Polo9';
import { Polo10 } from './components/Polos/Polo10';
import { Polo11 } from './components/Polos/Polo11';
import { Polo12 } from './components/Polos/Polo12';
import { Polo13 } from './components/Polos/Polo13';
import { Polo14 } from './components/Polos/Polo14';

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
          <Route path='/polo3'element ={<Polo3/>}/>
          <Route path='/polo4'element ={<Polo4/>}/>
          <Route path='/polo5'element ={<Polo5/>}/>
          <Route path='/polo6'element ={<Polo6/>}/>
          <Route path='/polo7'element ={<Polo7/>}/>
          <Route path='/polo8'element ={<Polo8/>}/>
          <Route path='/polo9'element ={<Polo9/>}/>
          <Route path='/polo10'element ={<Polo10/>}/>
          <Route path='/polo11'element ={<Polo11/>}/>
          <Route path='/polo12'element ={<Polo12/>}/>
          <Route path='/polo13'element ={<Polo13/>}/>
          <Route path='/polo14'element ={<Polo14/>}/>

          </Routes>
        </div>

      
    </div>
  )
}

export default App
