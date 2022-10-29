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
          <br></br>
          <Link className = 'polos' to='/polo2'>
            2 - Polo São Paulo
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            3 - Polo Belo Horizonte
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            4 - Polo Vitória
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            5 - Polo Brasília
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            6 - Polo Porto Alegre
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            7 - Polo Santa Catarina
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            8 - Polo Curitiba
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            9 - Polo Maceió
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            10 - Polo Salvador
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            11 - Polo Goiânia
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            12 - Polo Cuiabá
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            13 - Polo Campo Grande
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo2'>
            14 - Polo Recife
          </Link>

        </div>    
  
             
      
    </div>
  )
}

