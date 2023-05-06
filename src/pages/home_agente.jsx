import '../App.css';
import ban from '../imgs/del.jpg'
import bann from '../imgs/logo.png'
import bg from '../imgs/bg-nav.jpg'
import '../css/mob.css'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { db } from './firebase';

const HAgente = ({ handleClick, cart, adicionar, pro_p_cat, remover }) => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [artigo, setArtigo] = useState("");
    const [tel, setTel] = useState("");
    const [address1, setAd1] = useState("");
    const [address2, setAd2] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const randomNum = Math.floor(Math.random() * 90000000) + 10000000;
    let taxa = 0;

    document.title = 'Dasboard Agente | Meu Carrinho ';


    const [use, setUser] = useState([]);



    useEffect(() => {
        // Obtém o valor de 'user' do local storage quando o componente for montado
        const userString = localStorage.getItem('user_carrinho');
        if(userString) {
            const user = JSON.parse(userString);
            setUser(user);
        }

        else {
          const userData = {
              name: '',
              email: '',
              pictureUrl: '',
              tel: '',
            }
          setUser(userData);
        }
        if(use.name == '') {
            window.location.href = '/login';
        }
      }, []);


      //pegando dados 

      const [data, setData] = useState(null);

      useEffect(() => {
        const fetchData = async () => {
          const db = firebase.firestore();
          const docRef = db.collection('myCollection').doc(use.email);
          const docSnapshot = await docRef.get();
          if (docSnapshot.exists) {
            setData(docSnapshot.data());
          }
        };
    
        fetchData();
      }, [use.email]);
    
    const handleLogout = () => {
            window.location.href = '/login';
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
        <div className="w-100">
            <div className="bg-white nav-b fixed justify-content-between d-flex px-3 py-3" style={{}}>
                <NavLink to={'/'}>
                    <img src={bann} style={{ height: '1.6em' }} alt="" />
                </NavLink>
               <div className="d-flex">
                <span onClick={()=> handleLogout()} className="text-danger cursor my-auto me-3">Sair</span>
               <img src={`${use.pictureUrl}`} style={{height:'2.2em', border:'2px solid red'}} className='rounded-circle ' alt={use.name} />
               </div>
            </div>

            <br /><br />
            <div className="container ">
                <br /><br />
                <div className="a position-relative rounded-4 shadow py-3 bg-light fw-light px-2">

                <img src={`${use.pictureUrl}`} style={{height:'6.2em', border:'2px solid red', }} className='rounded-circle ' alt={use.name} /> <br />
                <b>Agente: <b className="text-danger">{use.name}</b></b><br />
                <b>Email: <b className="text-danger">{use.email}</b></b>
            
            <img src={bann} style={{position:'absolute', height:'4em',right:'0', bottom:'0', top:'0rem',opacity:'.1'}} alt="" />
                </div>
                <br />
                <h4 className="f-lilita text-danger">Bem vindo ao seu dashboard Agente {use.name}</h4>

                <hr />
                <center>
<br />
                    <span className=" p-1 anim-scale rounded-circle" style={{ right: '.5rem', bottom: '.5rem', height: '1.6rem', width: '1.6rem', display: 'grid', placeContent: 'center' }}>
                        <i className="bi bi-whatsapp f-50 text-success"></i>
                    </span>
                    <br />
                    <span className="text-secondary  f-10">Active notificações para o whatsapp</span><br />
                    <button className="btn f-12 btn-outline-danger">Activar</button>
                </center>
                <br /><br />
                <b className="text-danger f-lilita">Pedidos activos</b>
                <br />
                <br />
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className='shadow position-relative rounded-2' style={{ border: '1px solid red', width: '10rem', height: 'auto' }}>
                            <div className="text-center">
                                <img src={ban} style={{ height: '3.6em' }} alt="" className='mx-auto my-4 img-anim' />
                            </div>
                            <div className='px-2 pb-2'>
                                <span className="text-secondary f-12">
                                    <b>De</b>: Nome Pessoa 
                {use.pictureUrl}
                                </span><br />
                                <span className="text-secondary f-12">
                                    <b>Artigo</b>: Nome do artigo
                                </span><br />
                                <span className="text-secondary f-12">
                                    <b>Status</b>: <b className="text-success">Activo</b>
                                </span>
                            </div>
                            <span className=" p-1 rounded-circle position-absolute" style={{ right: '.5rem', bottom: '.5rem', height: '1.6rem', width: '1.6rem', display: 'grid', border: '1px solid red', placeContent: 'center' }}>
                                <i className="bi bi-telephone text-danger"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>



            <footer className='bg-danger shadow text-white text-center p-2'>

                <a href='https://wa.me/244934131274' style={{ textDecoration: 'none', border: '1px solid yellow' }} className="suporte rounded-pill color-white px-3 d-flex bg-danger py-1">
                    <span className='text-white me-2'>Suporte </span>
                    <i className="bi bi-headset text-white"></i>
                </a>
                <div className="d-flex justify-content-center">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-linkedin mx-2"></i>
                    <i className="bi bi-whatsapp"></i>
                </div>
                <center className='f-12'>
                    &copy; Meu Carrinho - 2023
                </center>

            </footer>





        </div>
    );
}

export default HAgente;
