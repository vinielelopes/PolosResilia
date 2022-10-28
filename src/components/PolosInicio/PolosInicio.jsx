import React from 'react'
import './PolosInicio.css';
import {Link} from "react-router-dom";


export function Polos() {

  return (
    <div >
      
        <div className='polosLista'>
          <Link className = 'polos' to='/polo1'>
            1 - Polo Rio de Janeiro
          </Link>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            2 - Polo São Paulo
          </Link>
        </div>    
  
             
      
    </div>
  )
}

