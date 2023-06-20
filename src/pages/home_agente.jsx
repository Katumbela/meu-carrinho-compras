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
            console.log("Erro ao buscar documento: ", error);
        }
    }

    const [novoTel, setT] = useState('');
    const [load, setLoad] = useState(false);
    const [load2, setLoad2] = useState(false);



    const msg = async (phoneNumber, text) => {
        const encodedText = encodeURIComponent(text);
        const url = `https://api.textmebot.com/send.php?recipient=+244${phoneNumber}&apikey=QKp5DRLU3HnH&text=${encodedText}`;

        try {
            const response = await fetch(url);

            if (response.ok) {
                // A mensagem foi enviada com sucesso
                console.log('Mensagem enviada com sucesso!');
            } else {
                // Ocorreu um erro ao enviar a mensagem
                console.log('Erro ao enviar a mensagem.');
            }
        } catch (error) {
            console.log('Ocorreu um erro na chamada da API:', error);
        }
    };


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
                    setLoad(false);
                    //  let link = `https://meucarrinho-zeta.vercel.app/track/${randomNumber}`;
                let texto = `Agente ${use.name}, Seu whatsapp foi actualizado com sucesso! 👍👌 ✅\n\nVamos ao trabalho 🤝🛵 !!!\n\n **Atenciosamente, Meu Carrinho LTDA.**`;
                    msg(novoTel, texto)
                });
            }
        } catch (error) {
            console.log("Erro ao atualizar telefone: ", error);
            toast.success('Ocorreu um erro ao tentar actualizar seu numero!');
            setLoad(false);
        }
    }

    check();

    const cadastro = async () => {
        try {
            const dados = {
                dataEnvio: new Date(),
                email: use.email,
                encomenda: '',
                endereco: '',
                id: use.uid,
                nome: use.displayName,
                telefone: '',
            };

            const querySnapshot = await db.collection("agentes")
                .where("email", "==", use.email)
                .where("id", "==", use.uid)
                .get();

            if (querySnapshot.empty) { // se não encontrar documentos, adiciona
                const docRef = await db.collection("agentes").doc(use.displayName).set(dados);
                console.log("cadastrado");
            } else { // se encontrar documentos, informa que já existe
                console.log("usuario cadastrado.");
            }
        } catch (error) {
            console.log("Erro ao adicionar documento: ", error);
        }
    }


    const [pedidos, setPedido] = useState({});
    const [pp, setPP] = useState(info.encomenda);

    useEffect(() => {
        setPP(pp);
        const fetchPedido = async () => {

            const docId = parseInt(pp);
            const docRef = await db.collection('pedidos').where('pedido', '==', docId).limit(1).get();
            if (!docRef.empty) {
                const data = docRef.docs[0].data();
                setPedido(data);
            } else {
                setPedido({});
                // alert('Nenhum documento encontrado com o parâmetro fornecido.');
            }
        };

        fetchPedido();
    }, [pp]);

    const fetchPedid = async () => {
        const docId = parseInt(pp);
        const docRef = await db.collection('pedidos').where('pedido', '==', docId).limit(1).get();
        if (!docRef.empty) {
            const data = docRef.docs[0].data();
            setPedido(data);
        } else {
            setPedido({});
            // alert('Nenhum documento encontrado com o parâmetro fornecido.');
        }
    };

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    

const [load3, setLoad3] = useState(false);

    const recolhi = async () => {
        setLoad3(true);

        const ped = parseInt(pp);
        try {
            // Recupere o documento do usuário que deseja atualizar
            const querySnapshot = await db.collection("pedidos")
                .where("pedido", "==", ped)
                .get();

            if (querySnapshot.empty) {
                console.log("Usuário não cadastrado.");
            } else {
                querySnapshot.forEach(async (doc) => {
                    
                    await db.collection("pedidos").doc(doc.id).update({
                        estado: 'Recolhido',
                    });
                    console.log("Estado alterado co sucesso!");
                    toast.success('Estado alterado com sucesso!');
                    setLoad3(false);  
                    let linkk = 'https://meucarrinho-zeta.vercel.app/track/'+pp;
                    let textoo3 = `Olá Boss o agente ${use.name}, acabou de recolher o artigo: ${pedidos.artigo} 📦 ✅ da/o Sr/a ${pedidos.nome} - ${pedidos.telefone1} em ${formattedDate} as ${formattedTime} e está em trânsito neste momento para o P. entrega: ${pedidos.endereco2} 🚦🚥🛵!\n\nAcompanhe aqui: ${linkk}\n\n **Atenciosamente, Meu Carrinho LTDA.**`;
                    let textoo = `Boss **${pedidos.nome}**, Seu artigo: __${pedidos.artigo}__ 📦✅ foi recolhido  em ${formattedDate} as ${formattedTime} e está em trânsito neste momento 🚦🚥🛵!\n\nAcompanhe aqui: ${linkk}\n\n **Atenciosamente, Meu Carrinho LTDA.**`;
                    let texto2 = `Olá ${pedidos.nome2}, temos uma encomenda para sí em nome de ${pedidos.nome}, artigo: ${pedidos.artigo} 📦✅ , o mesmo já foi recolhido  em ${formattedDate} as ${formattedTime} e está em trânsito neste momento com o agente ${use.name} 🚦🚥🛵!\n\nAcompanhe aqui: ${linkk}\n\n **Atenciosamente, Meu Carrinho LTDA.**`;
                        msg(pedidos.telefone1, textoo)

                        setTimeout(() => {
                            msg(pedidos.telefone2, texto2)
                            msg(924358193, textoo3)
                        }, 500);

                });
            }


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
                            encomenda: ped
                        });
                       
                        setLoad(false);
                        //  let link = `https://meucarrinho-zeta.vercel.app/track/${randomNumber}`;
                    let texto = `Agente ${use.name}, Seu whatsapp foi actualizado com sucesso! 👍👌\n\nVamos ao trabalho 🤝🛵 !!!\n\n **Atenciosamente, Meu Carrinho LTDA.**`;
                        msg(novoTel, texto)
                    });
                }
            } catch (error) {
                console.log("Erro ao atualizar telefone: ", error);
                toast.success('Ocorreu um erro ao tentar actualizar seu numero!');
                setLoad(false);
            }

        } catch (error) {
            setLoad3(false)
            console.log("Erro ao atualizar telefone: ", error);
            toast.success('Ocorreu um erro ao tentar actualizar seu estado de compra!');
        }
    }

    const cheguei = async () => {
        setLoad(true);

        const ped = parseInt(pp);
        try {
            // Recupere o documento do usuário que deseja atualizar
            const querySnapshot = await db.collection("pedidos")
                .where("pedido", "==", ped)
                .get();

            if (querySnapshot.empty) {
                console.log("Usuário não cadastrado.");
            } else {
                querySnapshot.forEach(async (doc) => {
                    // Atualize o campo "telefone" do documento
                    await db.collection("pedidos").doc(doc.id).update({
                        estado: 'Chegou',
                    });
                    console.log("Estado alterado co sucesso!");
                    toast.success('Estado alterado com sucesso! ');
                    setLoad(false);  
                    let linkk = `https://meucarrinho-zeta.vercel.app/track/${pp}`;
                    let textoo = `Boss ${pedidos.nome},o seu artigo: ${pedidos.artigo} 📦 ✅ chegou ao destino de entrega [${pedidos.endereco2}] aguardando pela recepção 👀👌📦🧾\n\n Veja aqui: ${linkk}\n\n\n Avalie nos na plataforma, conte-nos conte-nos como foi sua experiência ?a ?a.\n\nTotal a pagar: **${pedidos.taxa} Kz** 💵\nForma de pagamento: **${pedidos.pagamento}** 🧾 \n\n\n\n**Atenciosamente, Meu Carrinho LTDA.**`;
                    let textoo2 = `Boss ${pedidos.nome2},o artigo que lhe foi enviado(${pedidos.artigo}) pelo/a Sr(a). **_${pedidos.nome}_** 📦✅  chegou ao destino de entrega [**${pedidos.endereco2}**] 🏠 que é supostamente o seu endereço, o Agente ${use.name} está aguardando pela recepção 👀👌📦🧾\n\n Veja aqui: ${linkk}\n\n\nTotal: **${pedidos.taxa}  Kz** 💵 \n\n Avalie nos na plataforma, conte-nos conte-nos como foi sua experiência ?a ?a\n\n **Atenciosamente, Meu Carrinho LTDA.**`;
                    let textoo3 = `Olá Boss o agente ${use.name}, já fez a entrega do artigo: ${pedidos.artigo} 📦 da/o Sr/a ${pedidos.nome} - ${pedidos.telefone1} com sucesso ✅ em/no entrega: ${pedidos.endereco2} 🏠 🛵!\nRecebido por: ${pedidos.nome2}\n\n Veja o estado aqui: ${linkk}\n\n **Atenciosamente, Meu Carrinho LTDA.**`;
                    msg(pedidos.telefone1, textoo)
                    msg(pedidos.telefone2, textoo2)
                    msg(924358193, textoo3)
                });
            }
        } catch (error) {
            setLoad(false)
            console.log("Erro ao atualizar telefone: ", error);
            toast.success('Ocorreu um erro ao tentar actualizar seu estado de compra!');
        }
    }

    const setbill = async () => {
        setLoad2(true);
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
            const userId = currentUser.uid;
            try {
                const querySnapshot = await firebase.firestore()
                    .collection("agentes")
                    .where("id", "==", userId)
                    .get();
                if (querySnapshot.empty) {
                    console.log("Usuário não cadastrado.");
                } else {
                    const docId = querySnapshot.docs[0].id;
                    await firebase.firestore()
                        .collection("agentes")
                        .doc(docId)
                        .update({
                            encomenda: pp == '' ? info.encomenda : pp,
                        });

                    setLoad2(false);
                    console.log("Encomenda atualizada com sucesso!");
                }
            } catch (error) {

                setLoad2(false);
                console.log("Erro ao atualizar encomenda: ", error);
            }
        } else {
            console.log("Usuário não autenticado.");
        }
    };



    cadastro();

    useEffect(() => {
        cadastro();
    }, [])
    const [cityData, setCityData] = useState(null);

    useEffect(() => {
      async function fetchCityData() {
        try {
          const response = await fetch('http://ip-api.com/json');
          const data = await response.json();
    
          if (response.ok) {
            setCityData(data);
          } else {
            throw new Error('Não foi possível obter os dados da cidade.');
          }
        } catch (error) {
          console.error(error);
          setCityData(null);
        }
      }
    
      fetchCityData();
    }, []);
    


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
<center>
    
{cityData ? (
      <div>
        <h2>Dados da Cidade:</h2>
        <p>País: {cityData.country}</p>
        <p>Região: {cityData.regionName}</p>
        <p>Cidade: {cityData.city}</p>
        <p>CEP: {cityData.zip}</p>
        <p>Latitude: {cityData.lat}</p>
        <p>Longitude: {cityData.lon}</p>
        <p>Quarteirões: {cityData.district}</p>
        {/* Exibir outros dados conforme necessário */}
      </div>
    ) : (
      <p>Carregando...</p>
    )}
    </center>
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
                            <input type="tel" maxLength={9} value={novoTel} onChange={(e) => setT(e.target.value)} placeholder='900 000 000' className="form-control w-50" />
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
                <b className="text-danger f-20 f-lilita">Vai Levar um pedido ?</b><br />
                <span className=" f-16 text-secondary">
                    Adicione a referencia do pedido para começar sua corrida!
                </span>
                <br />
                <div className="">
                    <div className="d-flex">
                        <input value={pp} onChange={(e) => setPP(e.target.value)} type="text" placeholder='Ex: 12345678' className='form-control' />
                        <button onClick={() => fetchPedid()} disabled={!pp} className="text-center btn btn-danger" style={{ display: 'grid', placeContent: 'center' }}>
                            <i className="bi bi-play-circle"></i>
                        </button>
                    </div>
                </div>
                <br />
                <br />
                {
                    pedidos.artigo ==null ?
                        <div>
                            <center>
                                <span className="text-secondary">Não há ainda pedidos para ser entregue</span><br />
                                <span className="text-secondary">Seu ultimo codigo digitado foi <b className='text-danger'>{info.encomenda}</b> {info.encomenda != '' && 'copie e cole na caixa de teste para continuar!'}</span>
                            </center>
                        </div>

                        :
                        <div className='bg-light p-2'>
                            <h3 className="text-secondary">Artigo: <b className="text-danger">{pedidos.artigo}</b></h3>
                            <hr />
                            <p className="text-secondary">
                                <span> Pedido de: <b className="text-danger">{pedidos.nome}</b></span> <br />
                                <span> Telefone: <a href={'tel:244' + pedidos.telefone1} className="text-danger">{pedidos.telefone1}</a></span> <br />
                                <span> Recolha: <b className="text-danger">{pedidos.endereco1}</b></span> <br />
                                <hr />
                                <span>Vai entregar para:</span> <br />
                                <span> Nome: <b className="text-danger">{pedidos.nome2}</b></span> <br />
                                <span> Telefone: <a href={'tel:244' + pedidos.telefone2} className="text-danger">{pedidos.telefone2}</a></span> <br />
                                <span> P. entrega: <b className="text-danger">{pedidos.endereco2}</b></span> <br />
                                <hr />
                                <span>Dados do pedido:</span><br />
                                <span> Pagamento: <b className="mt-4 text-danger">{pedidos.pagamento}</b></span> <br />
                                <span> Total: <b className="mt-4 text-danger">{pedidos.taxa} Kz</b></span> <br />
                                <span> Estado: <b className={pedidos.estado === 'Recebido' ? 'text-success' : 'text-danger'}>{pedidos.estado}</b></span> <br />
                            </p>
                            <br />
                            <div className="row">
                                <div className="col-12 col-sm-6 text-start">
                                    <button disabled={pedidos.estado === 'Recolhido' || pedidos.estado === 'Chegou' || pedidos.estado === 'Recebido'}  onClick={()=>recolhi()} className="btn btn-outline-info">
                                        {load3 == false ? pedidos.estado === 'Recolhido' || pedidos.estado === 'Chegou' || pedidos.estado === 'Recebido' ? 'Artigo Recolhido' : 'Recolher Artigo' : <Loader />}
                                    </button>
                                </div>
                                <div className="col-12 col-sm-6 text-end">
                                    <button disabled={pedidos.estado === 'Chegou' || pedidos.estado === 'Recebido'}  onClick={()=>cheguei()} className="btn btn-outline-danger">
                                        {load == false ? pedidos.estado != 'Chegou' ? 'Cheguei ao Destino' : 'Corrida terminada' : <Loader />}
                                    </button>
                                </div>
                            </div>

                        </div>
                }

               
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
