import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';

import { NavLink } from 'react-router-dom';
import '../css/login.css';
import logo from '../imgs/logo.png'
import axios from 'axios';
import { db } from './firebase';

export const f = getFirestore();
const Login = () => {


    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);

        });
        
    }, []);


    const handleLoginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                // login bem-sucedido, faça algo aqui
                setUser(result.user);
                
                const userData = {
                    name: result.user.displayName,
                    email: result.user.email,
                    pictureUrl: result.user.photoURL,
                    tel: result.user.phoneNumber,
                    uid: result.user.uid,
                  };

                localStorage.setItem('user_carrinho', JSON.stringify(userData))
                

            
            })
            .catch((error) => {
                // erro no login, faça algo aqui
            });
    };



const salvar = async () => {
  try {
    const dados = { // crie um objeto com os dados que você quer adicionar
      dataEnvio: new Date(),
      email: user.email,
      encomenda:'',
      endereco:'',
      id: user.uid,
      nome: user.displayName,
      telefone:'',
    };
    const docRef = await db.collection("agentes").add(dados); // adicione os dados na coleção "usuarios"
    console.log("Documento adicionado com ID: ", docRef.id);
  } catch (error) {
    console.error("Erro ao adicionar documento: ", error);
  }
}


  const salva = () => {


    db.collection('agentes').add({
      dataEnvio: new Date(),
      email: user.email,
      encomenda:'',
      endereco:'',
      id: user.uid,
      nome: user.displayName,
      telefone:'',
    }).then(() => {
      console.logo('erro')
      }).catch((error) => {
        console.logo('erro')
      });

  }

  //   const provider = new firebase.auth.GoogleAuthProvider();


  //   firebase.auth().signInWithPopup(provider)
  // .then((result) => {
  //   // Login bem sucedido
  //   const user = result.user;
  //   console.log(user);
  // })
  // .catch((error) => {
  //   // Ocorreu um erro ao fazer login
  //   console.error(error);
  // });



    const handleLogout = () => {
        firebase.auth().signOut()
            .then(() => {
                setUser(null);

                const userData = {
                    name: '',
                    email: '',
                    pictureUrl: '',
                    tel: '',
                  }

                localStorage.setItem('user_carrinho', JSON.stringify(userData));
                
            })
            .catch((error) => {
                console.log(error);
            });
    };

    

    return (
        <div className="c mx-auto body">
            <div className="row ">
                <div className="col-12 autoo col-md-6 col-xl-6 col-xxl-6 luanda">
                  
                </div>
                <div className="col-12 col-md-6 autoo col-xl-6 col-xxl-6 ">
                    <div className="container my-auto form">
                        
                        <br />
                        <br />
                        <button onClick={()=>salvar()}>Enviarr</button>
                        <br />
                        <br />
                        <br />
                        <center> <img src={logo} style={{ height: '1.5em' }} alt="Logo Arotec" /></center>

                        <br />
                        <center>
                               {user ? (
                                <div>
                                    <p className='text-primary'>Você está logado como <b> {user.displayName}</b> <br />
                                    
                                   <span className="text-secondary">
                                   Email: {user.email}
                                   </span>
                                   </p>

                                    <button className='btn btn-danger' onClick={handleLogout}>Sair</button>

<NavLink className={'btn btn-outline-danger'} to={'/home_agente'} >Painel <i className="bi bi-house"></i></NavLink>

                                </div>
                            ) : (
<>
                            <b className='text-danger'>Faça login com Google</b>
                            <br />
                            <br />

                                <button className='d-flex btn-google btn btn-outline-danger' onClick={handleLoginWithGoogle}>
                                    <i className="bi bi-google text- me-2"> </i><span>Login com o Google</span>
                                </button>
                                <br />
                                <br />

<NavLink className={'btn btn-outline-secondary'} to={'/'} >Pagina Inicial <i className="bi bi-house"></i></NavLink>

                           
</> )}
                        </center>

                    </div>
                    <br />
<center>
</center>
                </div>
            </div>
        </div>
    )
}

export default Login;