import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/login.css';
import logo from '../imgs/logo.png'
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://seu-backend.com/login.php', {
          email,
          password,
        });
        
        localStorage.setItem('token', response.data.token);
        
        // Redireciona o usuário para a página de perfil
        window.location.href = '/perfil';
      } catch (error) {
        console.log(error);
      }
    };
  

   return(
    <div style={{height: '100vh'}} className="c nav-b body container">
        <br />
        <br />
        <center>
            <img src={logo} style={{height:'3em'}} alt="" />
        </center>
        <br />
        <br />
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="in form-control" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Senha' className="in form-control my-4" />
        <br />
        <button className="btn w-100 btn-outline-danger">
            Entrar
        </button>
    </div>
   )
}

export default Login;