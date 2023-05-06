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
import { useParams } from 'react-router-dom';
import { db } from './firebase';
import { toast } from 'react-toastify';
import Avaliacao from '../components/avaliar';

const Track = ({ handleClick, cart, adicionar, pro_p_cat, remover }) => {

  const { pedido } = useParams();
  const [loggedIn, setLoggedIn] = useState(false);

  const [p, setP]= useState('');

  const [inputValue, setInputValue] = useState(pedido);


  let pp = pedido;
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    pp = event.target.value;
  };

  const [position, setPosition] = useState(null);

  // fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     const state = data.address.state;
  //     const city = data.address.city;
  //     const suburb = data.address.suburb;
  //     const road = data.address.road;
  //     console.log(` State: ${state}, City: ${city}, Suburb: ${suburb}, Road: ${road}`);
  //   })
  //   .catch(error => console.error(error));
  const [info, setInfo] = useState({});

  
  const fetchInfo = async () => {

    const docId = parseInt(pp); // Substitua por seu parâmetro
const docRef = await db.collection('pedidos').where('pedido', '==', docId).limit(1).get();

if (!docRef.empty) {
  const data = docRef.docs[0].data(); // Obtenha os dados do documento
  toast.success('Rastreio bem sucedidi!');
  setInfo(data)
} else {

  setInfo({})
// alert('Nenhum documento encontrado com o parâmetro fornecido.');
}
  }

  useEffect(()=>{
    fetchInfo();
  }, []);


  fetchInfo();
  

  document.title = 'Rastreamento de Pedido | Meu Carrinho Compras';
  return (
    <div className="w-100">
      <div className="bg-white nav-b justify-content-between d-flex px-3 py-3" style={{}}>
        <NavLink to={'/'} >
          <img src={bann} style={{ height: '1.6em' }} alt="" />
        </NavLink>
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
        <br />
      </div>


      <div className="container">

        <h4 className="f-lilita text-danger">Pedido N- #{pedido}</h4>
        <br />
        <span className="text-secondary mb-1 f-12">Insira o codigo do seu pedido</span>
       <div className="d-flex">
       <input value={inputValue} onChange={handleInputChange} type="number"  placeholder='Ex: 12345678' className='form-control' />
       <NavLink disabled  to={'/track/'+inputValue} className="btn btn-danger">
        <i className="bi bi-search"></i>
       </NavLink>
       </div>
       <div>
  
  </div>
        <br />
        {
            info.artigo == null ?
            <div>
              <center>
                <img src={bann} style={{height:'4em', opacity:'.4'}} alt="" /> <br /><br />
                <span className='mt-5 text-secondary'>Comece por fazer um pedido!</span>
               <br /> 
               <NavLink to={'/pedido'} className={'f-14'} >Preencha o formulario!</NavLink>
              </center>
            </div> :
        <center>
          <img src={m} className='img-anim' style={{ height: '5.6em' }} alt="" />
        </center>
        }
        <br />
        <div>

          {
            info.length <= 0 ?
            '' :

          <center>
          <button className="btn mx-auto f-14 rounded-1 btn-outline-danger">Confirmar recebimento / Entrega</button>


          <br /><br />
          <div className="d-flex position-relative justify-content-between">

            <div className="">
              <div style={{ height: '5rem', width: '5rem', background: 'red' }} className="anim-scale rounded-circle">
                <i className="bi text-white f-50 bi-box-seam-fill anim-scale"></i>
              </div>
            </div>

            <div style={{ height: '.3rem', background: '', width: '120%' }} className="my-auto line-gradient"></div>

            <div className="">
              <div style={{ height: '5rem', width: '5rem', background: '#EABC02' }} className=" rounded-circle">
                <i className="bi text-white f-50 bi-person-check anim-scale"></i>
              </div>
            </div>
          </div>
          <b className="text-danger ">
            {info.estado == 'Pendente' && <span><span className="text-warning">Pendente:</span> <span className="fw-light">ainda não foi recolhido!</span></span>}
            {info.estado == 'Recolhido' && <span><span className="text-success">Recolhido:</span> <span className="fw-light"> está em trânsito agora!</span></span>}
            {info.estado == 'Chegou' && <span><span className="text-success">Recolhido:</span> <span className="fw-light"> chegou ao seu destino!</span></span>}
            {info.estado == 'Recebido' && <span><span className="text-success">Entregue:</span> <span className="fw-light"> este artigo já foi recebido!</span></span>}
            </b>
          <hr />
        </center>

          }
          <br />
          <br />
          <h2 className='text-secondary f-lilita'>Encomenda: <span className="text-danger">{info.artigo == null ? <span> <br /> Não encontrada! <i className="bi bi-exclamation-triangle"></i></span> : info.artigo}</span> </h2>
          <div className="datas bg-light py-2 px-2 my-2">
            <p className="text-secondary">
              Em nome de: <b>{info.nome}</b>
            </p>
            <span className="text-secondary">
             Telefone: <b>+244 {info.telefone1}</b>
            </span><br />
            <span className="text-secondary">
             P. Recolha: <b> {info.endereco1}</b>
            </span><br />
            <span className="text-secondary">
             Email: <b>+244 {info.email}</b>
            </span>
            <hr />
            <span className='text-secondary'>Local de Entrega:</span><br />
            <br />
            <span className="text-secondary">
             Nome: <b> {info.nome2}</b>
            </span><br />
            <span className="text-secondary">
             P. Entrega: <b> {info.endereco2}</b>
            </span><br />
            <span className="text-secondary">
             Telefone: <b>+244 {info.telefone2}</b>
            </span>
            <br />
            <br />
            <span className="text-secondary">
             Payment: <b className='text-danger'> {info.pagamento}</b>
            </span>
            <br />
            <span className="text-secondary">
             Total: <b className='text-danger'>Kz {info.taxa}.00</b>
            </span>

          </div>
          {/* <p>Latitude: {position.lat}</p>
          <p>Longitude: {position.lng}</p> */}


        </div>
        br

        <Avaliacao itemID={info.nome} />
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
