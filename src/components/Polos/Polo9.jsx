import React from 'react';
import axios from 'axios';
import { Card } from '../Cards/Card';
import { useState, useEffect } from 'react';
import './Polo.css';

export function Polo9(){
    const [data, setData] = useState([]);
    const [hidden2, setHidden2] = useState(true);
    const [matricula, setMatricula] = useState('');
    const [polo, setPolo] = useState('');
    const quantAlunos = data.length


    const getData = () => {
        axios
        .get(`https://635c1dd1fc2595be264102ea.mockapi.io/alunos?polo=9`)
        .then((res) => {
            setData(res.data);
        });

    };

    useEffect(() => {
        getData();
      }, []);



    const postData = (e) => {
        e.preventDefault();
        axios.post(`https://635c1dd1fc2595be264102ea.mockapi.io/alunos`, 
        {
            matricula, 
            polo

        })
        alert('Aluno adicionado com sucesso. Atualize a página!')
    }


   

    return (
        <div className='polo1'>  
            <h2>Polo 9 - Maceió</h2> 
            <p>Alunos cadastrados: {quantAlunos}</p>         
            <button onClick={() => setHidden2((s) => !s)} className='buttonAT'> Adicionar aluno </button>
            {!hidden2 ? (
                <div>
                    <input
                    placeholder="Matrícula"
                    type="text"
                    onChange={(e) => setMatricula(e.target.value)}
                    ></input>
                    <input
                    placeholder='Id do Polo'
                    onChange={(e) => setPolo(e.target.value)}
                    ></input>
                    <button type="submit" onClick={postData} className='buttonAT'> Salvar </button>
                </div>
            ) : null}
           

            {data.map((obj) => (
                <Card

                id={obj.id}
                matricula={obj.matricula}
                polo={obj.polo}

                
                
                />

            ))}

            
        </div>

    )
}