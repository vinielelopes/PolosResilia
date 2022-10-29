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
          <Link className = 'polos' to='/polo3'>
            3 - Polo Belo Horizonte
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo4'>
            4 - Polo Vitória
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo5'>
            5 - Polo Brasília
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo6'>
            6 - Polo Porto Alegre
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo7'>
            7 - Polo Santa Catarina
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo8'>
            8 - Polo Curitiba
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo9'>
            9 - Polo Maceió
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo10'>
            10 - Polo Salvador
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo11'>
            11 - Polo Goiânia
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo12'>
            12 - Polo Cuiabá
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo13'>
            13 - Polo Campo Grande
          </Link>
          <br></br>
          <br></br>
          <Link className = 'polos' to='/polo14'>
            14 - Polo Recife
          </Link>

        </div>    
  
             
      
    </div>
  )
}

