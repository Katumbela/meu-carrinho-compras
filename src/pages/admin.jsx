import '../App.css';
import ban from '../imgs/del.jpg'
import bann from '../imgs/logo.png'
import bg from '../imgs/bg-nav.jpg'
import '../css/mob.css'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = ({ handleClick, cart, adicionar, pro_p_cat, remover }) => {

    const [message, setMessage] = useState([]);
    const [map, setM] = useState(false);

    const instance = axios.create({
        baseURL: 'https://www.garimpo.ga/engenharias/',
        changeOrigin: true,
    });

    instance.get('teste.php')
        .then((response) => {
            setMessage(response.data);
            console.log(message)

        })
        .catch(error => {
            setMessage(error);
        });




    setTimeout(()=>{
        
        if (navigator.onLine) {
        } else {
        toast.error('Você está offline!');
        }
     },5000)

    
    document.title = 'Dasboard Admin | Meu Carrinho ';
    return (
        <div className="w-100">
            <ToastContainer/>
            <div className="bg-white nav-b fixed justify-content-between d-flex px-3 py-3" style={{}}>
                <NavLink to={'/'}>
                    <img src={bann} style={{ height: '1.6em' }} alt="" />
                </NavLink>
                <b className="text-danger f-lilita">Painel Admin</b>
                {/* <NavLink to={'/login'} className={'btn btn-outline-danger f-14 rounded-1 shadow'}> <i className="bi bi-person"></i></NavLink> */}
            </div>

            <br /><br />
            <br /><br />
            <br /><br />
            <div className="container">
                <h3 className="f-lilita text-danger">Agentes Cadastrados</h3>
                <table className='table table-hover table-striped'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tel</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {message.map((item, index) => (

                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>{item.telefone}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))} */}

                    </tbody>
                </table>

                <br />
                <br />

                <h3 className="f-lilita text-danger">Registro de Pedidos</h3>
                <table className='table table-hover table-striped'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tel</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                       {
                        map === true &&
                        message.map((item, index) => (

                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>{item.telefone}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))
                        }
                        
                       

                    </tbody>
                </table>
            </div>

            <br />
                <br />
                <br />
                <br />
                <br />
                <br />
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

export default Admin;
