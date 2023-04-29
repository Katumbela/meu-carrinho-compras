import '../../App.css';
import ban from '../../imgs/del.jpg'
import bann from '../../imgs/logo.png'
import bg from '../../imgs/bg-nav.jpg'
import '../../css/mob.css'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/loader';

const Agente = ({ handleClick, cart, adicionar, pro_p_cat, remover }) => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [address1, setAd1] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [load, setLoad] = useState(false);

    const options = ['Futungo', 'Sequele', 'Cacuaco', 'Cidade', 'Maianga', 'Porto de Luanda', 'Zango 5mil', 'zango 8mil', 'Viana', 'Zango 3', 'Mártires', 'Zango 4', 'Kimbangu', 'Aeroporto', 'Zango 2', 'Rocha Pinto', 'Zango 8000', 'Zango 5000', 'Kapolo', 'Zango 1', 'São Paulo', 'Kilamba', 'Cassenda', 'Nova vida', 'Golf 2', 'Mutamba', 'Golf 1', 'Via Expressa', 'camama', 'patriota', 'benfica', 'Zango 0', 'Alvalade', 'Vila Alice', 'Projecto Nova Vida', 'Gamek', 'Talatona', 'Morro Bento', 'Kinaxixi', 'Miramar'];


    const handleCadastro = async () =>  {
        setLoad(true);
       await axios.post("https://www.garimpo.ga/engenharias/signup.php", {
            nome: nome,
            email: email,
            tel: tel,
            end: address1,
        }).then((res) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Credentials", "true");
		res.setHeader("Access-Control-Max-Age", "1800");
		res.setHeader("Access-Control-Allow-Headers", "content-type");
		res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
            setLoad(false);
            setMensagem(res.data.mensagem);
        }).catch((err) => {
            console.error(err);
            setLoad(false);
        });
    }

    // useEffect(() => {
    //     const checkLogin = async () => {
    //         const response = await axios.get('http://seusite.com/check_login.php');
    //         setLoggedIn(response.data.logged_in);
    //     }
    //     checkLogin();
    // }, []);

    document.title = 'Mobilidade | Meu Carrinho ';
    return (
        <div className="w-100">
            <div className="bg-white nav-b fixed justify-content-between d-flex px-3 py-3" style={{}}>
                <NavLink to={'/'}>
                    <img src={bann} style={{ height: '1.6em' }} alt="" />
                </NavLink>
                <NavLink to={'/login'} className={'btn btn-outline-danger f-14 rounded-1 shadow'}> <i className="bi bi-person"></i></NavLink>
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



                <h5 className="f-lilita text-danger">Seja um agente carrinho</h5>
                <span className="text-secondary f-14">Faça seu cadastro </span>
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
                    <input list='opcoes1' value={address1} onChange={(e) => { setAd1(e.target.value); }} type="text" name="" placeholder='Digite o endereço' id="" className="form-control in" />
                    <datalist id="opcoes1">
                        {options.map((option, index) => (
                            <option key={index} value={option} />
                        ))}
                    </datalist>
                </div>
                <br />
                <a href="#" className="text-danger">Termos & condições</a>
                <br />
                <br />

                {
                    mensagem
                }

                {
                    load == false ?
                        <button disabled={!address1 || !nome || !tel} onClick={() => handleCadastro()} className="btn rounded-1 w-100 btn-danger">
                            Terminar cadastro
                        </button>
                        :
                        <center>
                            <Loader />
                        </center>
                }
                <br />
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

export default Agente;
