import '../App.css';
import mob1 from '../imgs/mob1.jpg'
import mob2 from '../imgs/mob2.jpg'
import m from '../imgs/del.jpg'
import bann from '../imgs/logo.png'
import bg from '../imgs/bg-nav.jpg'
import '../css/mob.css'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Track = ({ handleClick, cart, adicionar, pro_p_cat, remover }) => {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const response = await axios.get('http://www.garimpo.ga/engenharias/check_login.php');
      setLoggedIn(response.data.logged_in);
    }
    checkLogin();
  }, []);


  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  if (!position) {
    return <div>Carregando a pagina...</div>;
  }


  document.title = 'Rastreamento de Pedido | Meu Carrinho Compras';
  return (
    <div className="w-100">
      <div className="bg-white nav-b justify-content-between d-flex px-3 py-3" style={{}}>
        <NavLink to={'/'} >
          <img src={bann} style={{ height: '1.6em' }} alt="" />
        </NavLink>
        <div className="d-flex">
          <NavLink to={'/track'} className={'text-danger f-14 me-2 my-auto'} style={{ textDecoration: 'none' }}>Rastrear Pedido</NavLink>
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
        <br />
      </div>


      <div className="container">

        <h4 className="f-lilita text-danger">Rastrear Seu pedido</h4>
        <br />
        <span className="text-secondary mb-1 f-12">Insira o codigo do seu pedido</span>
        <input type="number" placeholder='Ex: 12345678' className='form-control' />
        <br />
        <center>
          <img src={m} className='img-anim' style={{ height: '5.6em' }} alt="" />
        </center>
        <br />
        <div>
          <center>
            <button className="btn mx-auto f-14 rounded-1 btn-outline-danger">Confirmar recebimento / Entrega</button>
          </center>
          <br />
          <h2 className='text-danger f-lilita'>Localização do seu pedido</h2>
          <p>Latitude: {position.lat}</p>
          <p>Longitude: {position.lng}</p>
          <div
            style={{
              width: "100%",
              height: "400px",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://maps.google.com/maps?q=${position.lat},${position.lng}&z=15&output=embed`}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>



      <a href='https://wa.me/244934131274' style={{ textDecoration: 'none', border: '1px solid yellow' }} className="suporte rounded-pill color-white px-3 d-flex bg-danger py-1">
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
          <span className="text-white">Parceiros</span><br />
          <span className="text-white">Agentes</span><br />
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

export default Track;
