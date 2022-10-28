import React from 'react';
import axios from 'axios';
import './Card.css';

export function Card(props){

    const deleteData = () => {
    axios.delete(`https://635c1dd1fc2595be264102ea.mockapi.io/alunos`)
    }

    return (
        <div className='cards'>
                    <button onClick={() => deleteData(props.matricula)}> Deletar </button>
                    <h6>Matrícula: {props.matricula}</h6>
                    <h6>Polo: {props.polo}</h6>
            
            
        </div>

    )
}