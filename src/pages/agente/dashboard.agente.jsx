import '../../App.css';
import ban from '../../imgs/del.jpg'
import bann from '../../imgs/logo.png'
import bg from '../../imgs/bg-nav.jpg'
import '../../css/mob.css'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase';


const Agente = ({ handleClick, cart, adicionar, pro_p_cat, remover }) => {

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
    

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [address1, setAd1] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [load, setLoad] = useState(false);

    if (navigator.onLine) {
    } else {
        toast.error('Você está offline!');
    }

    useEffect(() => {
        if (!navigator.onLine) {
            toast.error('Você está offline!');
        }
    }, [])
    // const handleCadastro =  () =>  {
    //     setLoad(true);
    //     axios.post("https://www.garimpo.ga/engenharias/signup.php", {
    //         nome: 'nome',
    //         email: 'email',
    //         tel: 'tel',
    //         end: 'address1',
    //     }).then((res) => {
    //         setLoad(false);
    //         alert(res.data);
    //     }).catch((err) => {
    //         alert(err);
    //         setLoad(false);
    //     });
    // }

    const [message, setMessage] = useState([]);



    const envia = async () => {
        setLoad(true);
        try {
            const dados = {
                dataEnvio: new Date(),
                email: email,
                endereco1: address1,
                telefone1: tel,
                nome: nome,
                conta: 'Agente',
            };

            const querySnapshot = await db.collection("agente")
                .where("nome", "==", nome)
                .where("email", "==", email)
                .get();

            if (querySnapshot.empty) { // se não encontrar documentos, adiciona
                const docRef = await db.collection("agente").doc(nome).set(dados);
                console.log("cadastrado");
                setMessage('sucesso');
                setLoad(false);
                toast.success('Seus dados foram recebidos com sucesso, entraremos em contacto!');
            } else { // se encontrar documentos, informa que já existe
                console.log("usuario cadastrado.");
            }
        } catch (error) {
            toast.error('Ocorreu um erro, verifique sua conexão ou tente mais tarde!');
            console.error("Erro ao adicionar documento: ", error);
        }
    }


    document.title = 'Mobilidade Agente | Meu Carrinho ';
    return (
        <div className="w-100">
            <ToastContainer />
            <div className="bg-white nav-b fixed justify-content-between d-flex px-3 py-3" style={{}}>
                <NavLink to={'/'}>
                    <img src={bann} style={{ height: '1.6em' }} alt="" />
                </NavLink>
                <NavLink to={'/login'} className="text-danger f-lilita"><i className="bi bi-person"></i> Entrar</NavLink>
            </div>
            <br /><br /><br /><br />

            {/* <div className="row">
                <div className="col-12 text-center py-3 col-lg-6">
                    <img src={ban} className='w-25 img-anim w-lg-75 mx-auto' alt="" />
                </div>
            </div> */}

            <div className="container">



                {/*                 
            {loggedIn ? (
        <h1>Bem-vindo!</h1>
      ) : (
        <h5 className='mx-auto'>Você precisa fazer login para acessar esta página</h5>
      )} */}




                {
                    message === 'sucesso' ?
                        <div>
                            <center>
                                <br />
                                <span className=" p-1 anim-scale rounded-circle" style={{ right: '.5rem', bottom: '.5rem', height: '1.6rem', width: '1.6rem', display: 'grid', placeContent: 'center' }}>
                                    <i className="bi bi-hand-thumbs-up-fill f-60 text-danger"></i>
                                </span>
                                <br />
                                <b className="f-lilita text-danger f-30">Seu Cadastro foi recebido com sucesso agente {nome}</b>
                                <br />

                                <p className="f-20 text-secondary">Entraremos em contacto</p>

                                <NavLink to={'/'} className="btn btn-outline-danger">
                                    OK
                                </NavLink>
                            </center>
                        </div>
                        :
                        <div className="formulario">
                            <center>
                            <center>
    
    {cityData ? (
          <div>
            <h2>Dados da Cidade:</h2>
            <p>País: {cityData.country}</p>
            <p>Região: {cityData.regionName}</p>
            <p>Cidade: {cityData.city}</p>
            <p>Latitude: {cityData.lat}</p>
            <p>Longitude: {cityData.lon}</p>
            <p>Quarteirões: {cityData.district}</p>
            {/* Exibir outros dados conforme necessário */}
          </div>
        ) : (
          <p>Carregando...</p>
        )}
        </center>
                                <i className="bi bi-cash-coin f-50 text-danger"></i>
                                <br />
                            </center>
                            <h5 className="f-lilita text-danger">Seja um agente carrinho</h5>
                            <span className="text-secondary f-14">Faça seu cadastro </span>
                            <br />

                            <br />
                            <div className="input py-2">
                                <span className="text-secondary f-14">Nome <span className="text-danger">*</span></span>
                                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" name="" placeholder='Nome completo' id="" className="form-control in" />
                            </div>
                            <div className="input py-2">
                                <span className="text-secondary f-14">Email </span>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="" placeholder='Digite seu email' id="" className="form-control in" />
                            </div>
                            <div className="input py-2">
                                <span className="text-secondary f-14">Telefone <span className="text-danger">*</span></span>
                                <input value={tel} onChange={(e) => setTel(e.target.value)} type="text" name="" placeholder='Digite seu tel' id="" className="form-control in" />
                            </div>
                            <div className="input py-2">
                                <span className="text-secondary f-14">Endereço <span className="text-danger">*</span></span>
                                <input value={address1} onChange={(e) => { setAd1(e.target.value); }} type="text" name="" placeholder='Digite o endereço' id="" className="form-control in" />

                            </div>
                            <br />
                            <a href="#" className="text-danger">Termos & condições</a>
                            <br />
                            <br />

                            {
                                mensagem
                            }

                            {
                                load === false ?
                                    <button disabled={!address1 || !nome || !tel} onClick={() => envia()} className="btn rounded-1 w-100 btn-danger">
                                        Terminar cadastro
                                    </button>
                                    :
                                    <center>
                                        <Loader />
                                    </center>
                            }
                            <br />

                            <center><br />
                                <span className="text-secondary f-1">Ou</span><br />
                                <br />
                                <NavLink to={'/login'} >Faça Login</NavLink>
                            </center>
                        </div>
                }
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <center>
                    <img src={bann} style={{ height: '4.6em', opacity: '.1' }} alt="" />
                </center>
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

export default Agente;
