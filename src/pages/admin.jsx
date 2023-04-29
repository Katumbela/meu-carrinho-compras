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
            console.log(message);
            setM(true);

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
            <br />
            <div className="container">

            <br />

<h3 className="f-lilita text-danger">Registro de Pedidos</h3>


<div className="row">
    {
        map == true &&
        message.map((itemm, indexx) => (
            <div key={indexx} className="col-6 my-2 col-md-4 col-lg-3">

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
))
}
</div>
<br /><br />
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

                    {
                        map == true &&
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

                <br />
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
