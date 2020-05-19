import React, {useState, } from 'react';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';


export default function Login() {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  async function handleLogin(e) {
    e.preventDefault();

    try {

      const response = await api.post('sessions', {email, password});
      
      localStorage.setItem('ongName', response.data.name)
      localStorage.setItem('ongId', response.data._id);



    } catch (err){
      alert('Falha no login, tente novamente.')
    }
  }


  return ( 
      <>
        <div className="container">        
          <div className="content">
            <div className="textBlock">
            <form onSubmit={handleLogin}>

              <input 
              type="email" 
              placeholder="Digite seu E-mail"
              value={email}
              onChange={ e => setEmail(e.target.value)}
              />

              <input 
              type="password" 
              placeholder="Digite sua Senha"
              value={password}
              onChange={ e => setPassword(e.target.value)}
              />

              <div className="buttons">
                <button type="submit" className="btn">Login</button>
                
                
                <FiLogIn size={16} color="#e02041"/>
                    Não tenho cadastro
                
                
              </div>
            </form>
            </div>
          </div>
        </div>
    </>
  );
}
