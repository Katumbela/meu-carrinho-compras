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
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../components/loader';

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
        if (userString) {
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
        if (use.name == '') {
            window.location.href = '/login';
        }
        check();
    }, []);


    useEffect(() => {
        // Adicione um listener para o estado da autenticação
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          if (!user) {
            // Se não houver usuário autenticado, redirecione para a página de login
            window.location.href = '/login'; // troque '/login' pela rota da sua tela de login
            

            const userData = {
                name: '',
                email: '',
                pictureUrl: '',
                tel: '',
            }

            localStorage.setItem('user_carrinho', JSON.stringify(userData));

          }
        });
        
    
        // Retorne uma função de limpeza para remover o listener quando o componente for desmontado
        return unsubscribe;
      }, []);

    //pegando dados 

    //   const [data, setData] = useState(null);

    //   useEffect(() => {
    //     const fetchData = async () => {
    //       const db = firebase.firestore();
    //       const docRef = db.collection('myCollection').doc(use.email);
    //       const docSnapshot = await docRef.get();
    //       if (docSnapshot.exists) {
    //         setData(docSnapshot.data());
    //       }
    //     };

    //     fetchData();
    //   }, [use.email]);


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

    const [info, setInfo] = useState({});

    const check = async () => {
        try {
            const querySnapshot = await db.collection("agentes")
                .where("email", "==", use.email)
                .where("id", "==", use.uid)
                .get();

            if (querySnapshot.empty) {
                console.log("Usuário não cadastrado.");
            } else {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    setInfo(data);
                });
            }
        } catch (error) {
            console.error("Erro ao buscar documento: ", error);
        }
    }

    const [novoTel, setT] = useState('');
    const [load, setLoad] = useState(false);

    const actTel = async () => {
        setLoad(true);
        try {
            // Recupere o documento do usuário que deseja atualizar
            const querySnapshot = await db.collection("agentes")
                .where("email", "==", use.email)
                .where("id", "==", use.uid)
                .get();

            if (querySnapshot.empty) {
                console.log("Usuário não cadastrado.");
            } else {
                querySnapshot.forEach(async (doc) => {
                    // Atualize o campo "telefone" do documento
                    await db.collection("agentes").doc(doc.id).update({
                        telefone: novoTel
                    });
                    console.log("Telefone atualizado com sucesso!");
                    toast.success('Telefone/ Whatsapp actualizado com sucesso!');
                    setLoad(true);
                });
            }
        } catch (error) {
            console.error("Erro ao atualizar telefone: ", error);
            toast.success('Ocorreu um erro ao tentar actualizar seu numero!');
        }
    }

    check();


    return (
        <div className="w-100">
            <ToastContainer />
            <div className="bg-white nav-b fixed justify-content-between d-flex px-3 py-3" style={{}}>
                <NavLink to={'/'}>
                    <img src={bann} style={{ height: '1.6em' }} alt="" />
                </NavLink>
                <div className="d-flex">
                    <span onClick={() => handleLogout()} className="text-danger cursor my-auto me-3">Sair</span>
                    <img src={`${use.pictureUrl}`} style={{ height: '2.2em', border: '2px solid red' }} className='rounded-circle ' alt={use.name} />
                </div>
            </div>

            <br /><br />
            <div className="container ">
                <br /><br />
                <div className="a position-relative rounded-4 shadow py-3 bg-light fw-light px-2">

                    <img src={`${use.pictureUrl}`} style={{ height: '6.2em', border: '2px solid red', }} className='rounded-circle ' alt={use.name} /> <br />
                    <b>Agente: <b className="text-danger">{use.name}</b></b><br />
                    <b>Email: <b className="text-danger">{use.email}</b></b>

                    <img src={bann} style={{ position: 'absolute', height: '4em', right: '0', bottom: '0', top: '0rem', opacity: '.1' }} alt="" />
                </div>
                <br />
                <h4 className="f-lilita text-danger">Bem vindo ao seu painel Agente {use.name}</h4>

                <hr />

                {
                    info.telefone == '' ?
                        <center>
                            <br />
                            <span className=" p-1 anim-scale rounded-circle" style={{ right: '.5rem', bottom: '.5rem', height: '1.6rem', width: '1.6rem', display: 'grid', placeContent: 'center' }}>
                                <i className="bi bi-whatsapp f-50 text-success"></i>
                            </span>
                            <br />
                            <span className="text-secondary  f-10">Adicione seu o whatsapp {info.nome} !</span><br />
                            <input type="tel" value={novoTel} onChange={(e) => setT(e.target.value)} placeholder='900 000 000' className="form-control w-50" />
                            <button onClick={() => actTel()} className="btn f-12 btn-outline-danger" disabled={!novoTel}>{load == false ? <span>Activar</span> : <Loader />}</button>
                        </center>
                        :
                        <div>
                            <div className="d-flex">
                                <i className="bi bi-whatsapp text-success"></i> <span className="ms-2 text-success">+244 {info.telefone}</span>
                            </div>
                            <span className="text-secondary f-14">Para alterar seu whatsapp contacte o suporte</span>
                        </div>
                }



                <br /><br />
                <b className="text-danger f-lilita">Pedidos activos</b>
                <br />
                <br />
                <div className="row">
                    {
                        info.encomenda != '' ?

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className='shadow position-relative rounded-2' style={{ border: '1px solid red', width: '10rem', height: 'auto' }}>
                                    <div className="text-center">
                                        <img src={ban} style={{ height: '3.6em' }} alt="" className='mx-auto my-4 img-anim' />
                                    </div>
                                    <div className='px-2 pb-2'>
                                        <span className="text-secondary f-12">
                                            <b>De</b>: Nome Pessoa

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
                            :
                            <div className='col-12 w-100'>
                                <center className='w-75 mx-auto'>
                                    <i className="bi bi-exclamation-triangle text-warning f-50"></i><br />
                                    <span className="text-secondary">Não tem ainda nenhuma encomenda para ser feito agente {use.name}</span>
                                </center>
                            </div>

                    }
                </div>
                <br />
                <br />
                <br />
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