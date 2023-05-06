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

      db.collection('agentes').doc(user.displayName).get().then((doc) => {
        if (!doc.exists) {
          db.collection('agentes').doc(user.displayName).set({
            dataEnvio: new Date(),
            email: user.email,
            encomenda: '',
            endereco: '',
            id: user.uid,
            nome: user.displayName,
            telefone: '',
          }).then(() => {
            console.logo('usuário adicionado');
          }).catch((error) => {
            console.error('Erro ao adicionar usuário: ', error);
          });
        } else {
          console.log('Usuário já cadastrado.');
        }
      });
      

  } )
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


  const cadastro = async () => {
    try {
      const dados = {
        dataEnvio: new Date(),
        email: user.email,
        encomenda: '',
        endereco: '',
        id: user.uid,
        nome: user.displayName,
        telefone: '',
      };

      const querySnapshot = await db.collection("agentes")
        .where("email", "==", user.email)
        .where("id", "==", user.uid)
        .get();

      if (querySnapshot.empty) { // se não encontrar documentos, adiciona
        const docRef = await db.collection("agentes").add(dados);
        console.log("cadastrado");
      } else { // se encontrar documentos, informa que já existe
        console.log("usuario cadastrado.");
      }
    } catch (error) {
      console.error("Erro ao adicionar documento: ", error);
    }
  }


  const salva = () => {


    db.collection('agentes').add({
      dataEnvio: new Date(),
      email: user.email,
      encomenda: '',
      endereco: '',
      id: user.uid,
      nome: user.displayName,
      telefone: '',
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
      <div className=" ">
        <div className="container my-auto form">

          <br />
          <br />
          <br />
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


              </>)}
          </center>

        </div>
        <br />
        <center>
        </center>
      </div>

    </div>
  )
}

export default Login;