import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Card.css';

export function Card(props){

    const [hidden, setHidden] = useState(true);
    const [matricula, setMatricula] = useState('');
    const [polo, setPolo] = useState('');
    const id = props.id



    const deleteData = (id) => {
    axios.delete(`https://635c1dd1fc2595be264102ea.mockapi.io/alunos/${id}`)
    }

    const updateData = (e) => {
        e.preventDefault()
        axios.put(`https://635c1dd1fc2595be264102ea.mockapi.io/alunos/${id}`, 
        {
            matricula, 
            polo

        })
        alert('Transferência realizada com sucesso. Atualize a página!')

    }
   

    return (
        <div className='cards'>
                    <button onClick={() => deleteData(props.id)} className='delete'> X </button>
                    <h6>Matrícula: {props.matricula}</h6>
                    <h6>Polo: {props.polo}</h6>
                    <button onClick={() => setHidden((s) => !s)} className='buttonAT'> Transferir </button>
            {!hidden ? (
                <div>
                    <input
                    placeholder='Matrícula'
                    type='text'
                    maxlength="8"
                    onChange={(e) => setMatricula(e.target.value)}
                    ></input>
                    <input
                    placeholder='Id do Polo Novo'
                    onChange={(e) => setPolo(e.target.value)}
                    ></input>
                    <button type="submit" onClick={updateData}> Salvar </button>
                </div>
            ) : null}
        
        </div>

    )
}