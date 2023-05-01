import '../App.css';
import mob1 from '../imgs/mob1.jpg'
import mob2 from '../imgs/mob2.jpg'
import mob3 from '../imgs/mob3.jpg'
import mob4 from '../imgs/mob4.jpg'
import bann from '../imgs/logo.png'
import bg from '../imgs/bg-nav.jpg'
import '../css/mob.css'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Mob = ({ handleClick, cart, adicionar, pro_p_cat, remover }) => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const checkLogin = async () => {
            const response = await axios.get('http://www.garimpo.ga/engenharias/check_login.php');
            setLoggedIn(response.data.logged_in);
        }
        checkLogin();
    }, []);

    document.title = 'Mobilidade | Meu Carrinho Compras';
    return (
        <div className="w-100">
            <div className="bg-white nav-b justify-content-between d-flex px-3 py-3" style={{}}>
                <img src={bann} style={{ height: '1.6em' }} alt="" />
                <div className="d-flex">
                    <NavLink to={'/track/123456789'} className={'text-danger f-14 me-2 my-auto'} style={{ textDecoration: 'none' }}>Rastrear Pedido</NavLink>
                    <NavLink to={'/pedido'} className={'btn btn-outline-danger f-14 rounded-1 shadow'}> Solicitar</NavLink>
                </div>
            </div>
            <div>
                {/* 
      {loggedIn ? (
        <h1>Bem-vindo!</h1>
      ) : (
        <h1>Você precisa fazer login para acessar esta página</h1>
      )} */}
            </div>
            <div className="row gap-0">
                <div className="col-12 col-lg-6">
                    <img src={mob1} className='w-100' alt="" />
                </div>
                <div className="col-12 col-lg-6">
                    <img src={mob2} className='w-100' alt="" />
                </div>
                <div className="col-12 col-lg-6">
                    <img src={mob3} className='w-100' alt="" />
                </div>
                <div className="col-12 col-lg-6">
                    <img src={mob4} className='w-100' alt="" />
                </div>
            </div>
            <a href='https://wa.me/244934131274' style={{textDecoration:'none', border: '1px solid yellow' }} className="suporte rounded-pill color-white px-3 d-flex bg-danger py-1">
                <span className='text-white me-2'>Suporte </span>
                <i className="bi bi-headset text-white"></i>
            </a>
            <footer className='bg-danger text-white text-center p-2'>

                <div className="d-flex justify-content-center">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-linkedin mx-2"></i>
                    <i className="bi bi-whatsapp"></i>
                </div>
                <div className="text-start">
                    <NavLink to={'/parceiro'} className="text-white">Parceiros</NavLink><br />
                    <NavLink to={'/agente'} className="text-white">Agentes</NavLink><br />
                    <span className="text-white">Termos & Condições</span>
                </div>
                <hr />
                <center className='f-14'>
                    &copy; Meu Carrinho - 2023
                </center>

            </footer>





        </div>
    );
}

export default Mob;
