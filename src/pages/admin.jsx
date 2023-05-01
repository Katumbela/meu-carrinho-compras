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
    const [pedidos, setP] = useState([]);
    const [map, setM] = useState(false);

    const instance = axios.create({
        baseURL: 'https://www.garimpo.ga/engenharias/',
        changeOrigin: true,
    });


    instance.get('pedidos.php')
    .then((response) => {
        setP(response.data);
        setM(true);

    })
    .catch(error => {
        setMessage(error);
    });


    instance.get('teste.php')
        .then((response) => {
            setMessage(response.data);
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
                <b className="text-danger f-lilita f-lilita">Painel Admin</b>
                {/* <NavLink to={'/login'} className={'btn btn-outline-danger f-14 rounded-1 shadow'}> <i className="bi bi-person"></i></NavLink> */}
            </div>

            <br /><br />
            <br />
            <div className="container">

            <br />

<h3 className="f-lilita text-danger f-lilita">Registro de Pedidos Activos</h3>


<div className="row">
    {
        map == true &&
        pedidos.map((itemm) => (
            <div key={itemm.id} className="col-6 my-2 col-md-4 col-lg-3">

        <div className='shadow position-relative rounded-2' data-bs-toggle="modal" data-bs-target={'#id'+itemm.id} style={{ border: '1px solid red', width: '10rem', height: 'auto' }}>
            <div className="text-center">
                <img src={ban} style={{ height: '3.6em' }} alt="" className='mx-auto my-4 img-anim' />
            </div>
            <div className='px-2 pb-2'>
                <span className="text-secondary f-12">
                    <b>De</b>: {itemm.nome1.split(" ")[0]}
                </span><br />
                <span className="text-secondary f-12">
                    <b>Artigo</b>: {itemm.artigo}
                </span><br />
                <span className="text-secondary f-12">
                    <b>Status</b>: <b className="text-success">Activo</b>
                </span>
            </div>
            <b style={{top:'.2rem', left:'.5rem'}} className="text-danger f-12 position-absolute f-lilita">P. #{itemm.pedido}</b>
            <span className=" p-1 rounded-circle position-absolute" style={{ right: '.5rem', bottom: '.5rem', height: '1.6rem', width: '1.6rem', display: 'grid', border: '1px solid red', placeContent: 'center' }}>
                <i className="bi bi-telephone text-danger f-lilita"></i>
            </span>
        </div>
    </div>
))
}
</div>
<br /><br />
                <h3 className="f-lilita text-danger f-lilita">Agentes Cadastrados</h3>
                <table className='table w-100 f-12 table-hover table-striped'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tel</th>
                            <th>Email</th>
                            <th>Endereco</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        map == true &&
                        message.map((item) => (

                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>{item.telefone}</td>
                                <td>{item.email}</td>
                                <td>{item.endereco}</td>
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






                <div className="modais">
                {
        map == true &&
        pedidos.map((item) => (

            // <!-- Modal -->
            <div key={item.id} className="modal fade" id={'id'+item.id} data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Pedido <b className="text-danger f-lilita">#{item.pedido}</b></h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary">Solicitante</span>
                        <b className="text-danger f-lilita">
                            {item.nome1}
                        </b>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary">Tel:</span>
                        <b className="text-danger f-lilita">
                            {item.tel1}
                        </b>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary">Email:</span>
                        <b className="text-danger f-lilita">
                            {item.email}
                        </b>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary">P. Recolha:</span>
                        <b className="text-danger f-lilita">
                            {item.end1}
                        </b>
                    </div>
                    <hr />
                    <div className="d-flex mt-3 mb-2 justify-content-between">
                        <b className="text-secondary ">Entregar para:</b>
                        <b className="text-danger f-lilita">
                            
                        </b>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary">Nome:</span>
                        <b className="text-danger f-lilita">
                            {item.nome2}
                        </b>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary">Tel:</span>
                        <b className="text-danger f-lilita">
                            {item.tel2}
                        </b>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary">P. Entrega:</span>
                        <b className="text-danger f-lilita">
                            {item.end2}
                        </b>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary">Payment:</span>
                        <b className="text-danger f-lilita">
                            {item.pagamento}
                        </b>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary">Price:</span>
                        <b className="text-danger f-lilita">
                            Kz {item.preco}.00
                        </b>
                    </div>
                    <hr />
                    <div className="">
                        <span className="text-secondary">Artigo:</span>
                        <br /><br />
                        <b className="text-danger f-lilita">
                            {item.artigo}
                        </b>
                    </div>
<hr />
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary">Status:</span>
                        <b className="text-success">
                            Activo
                        </b>
                    </div>
                    
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
                  </div>
                </div>
              </div>
            </div>

        ))}



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

export default Admin;
