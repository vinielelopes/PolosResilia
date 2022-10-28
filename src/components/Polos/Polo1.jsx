import React from 'react';
import axios from 'axios';
import { Card } from '../Cards/Card';
import { useState, useEffect } from 'react';

export function Polo1(){
    const [data, setData] = useState([]);
    const [hidden, setHidden] = useState(true);
    const [hidden2, setHidden2] = useState(true);
    const [matricula, setMatricula] = useState('');
    const [polo, setPolo] = useState('');


    const getData = () => {
        axios
        .get(`https://635c1dd1fc2595be264102ea.mockapi.io/alunos`)
        .then((res) => {
            setData(res.data);
        });

    };

    useEffect(() => {
        getData();
      }, []);


    const updateData = (e) => {
        e.preventDefault();
        axios.put(`https://635c1dd1fc2595be264102ea.mockapi.io/alunos`, 
        {
            matricula, 
            polo

        })
        alert('Transferência concluída. Atualize a página!')
    }

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
        <div>            
            <button onClick={() => setHidden2((s) => !s)}> Adicionar </button>
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
                    <button type="submit" onClick={postData}> Salvar </button>
                </div>
            ) : null}
            <button onClick={() => setHidden((s) => !s)}> Transferir </button>
            {!hidden ? (
                <div>
                    <input
                    placeholder='Matrícula'
                    type='text'
                    onChange={(e) => setMatricula(e.target.value)}
                    ></input>
                    <input
                    placeholder='Id do Polo Novo'
                    onChange={(e) => setPolo(e.target.value)}
                    ></input>
                    <button type="submit" onClick={updateData}> Salvar </button>
                </div>
            ) : null}

            {data.map((obj) => (
                <Card

                matricula={obj.matricula}
                polo={obj.polo}

                
                
                />

            ))}

            
        </div>

    )
}