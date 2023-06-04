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
import { ToastContainer, toast } from 'react-toastify';
import Avaliacao from '../components/avaliar';
import Loader from '../components/loader';
import moment from 'moment';
import { Timestamp } from 'firebase/firestore';

const Track = ({ handleClick, cart, adicionar, pro_p_cat, remover }) => {

  const { pedido } = useParams();
  const [loggedIn, setLoggedIn] = useState(false);

  const [p, setP] = useState('');

  const [inputValue, setInputValue] = useState(pedido);

  let data = new Date();

  let pp = pedido;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    pp = event.target.value;
  };


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
      console.error('Ocorreu um erro na chamada da API:', error);
    }
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

  const [ainfo, setAInfo] = useState({});


  const fetchInfo = async () => {

    const docId = parseInt(pp); // Substitua por seu parâmetro
    const docRef = await db.collection('pedidos').where('pedido', '==', docId).limit(1).get();

    if (!docRef.empty) {
      const data = docRef.docs[0].data(); // Obtenha os dados do documento

      setInfo(data)
    } else {

      setInfo({})
      // alert('Nenhum documento encontrado com o parâmetro fornecido.');
    }
  }
  const fetchAInfo = async () => {

    const docId = parseInt(pp); // Substitua por seu parâmetro
    const docRef = await db.collection('agentes').where('encomenda', '==', docId).limit(1).get();

    if (!docRef.empty) {
      const data = docRef.docs[0].data(); // Obtenha os dados do documento

      setAInfo(data)
    } else {

      setAInfo({})
      // alert('Nenhum documento encontrado com o parâmetro fornecido.');
    }
  }

  useEffect(() => {
    fetchInfo();
    fetchAInfo();
  }, []);


  fetchInfo();
  fetchAInfo();


  const [load, setLoad] = useState(false);


  const Confirmar = async () => {
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
            estado: 'Entregue',
          });
          console.log("Estado alterado co sucesso!");
          toast.success('Confirmação recebida com sucesso! obrigado por preferir a Meu Carrinho');
          setLoad(false);
          const currentDate = new Date();
          const formattedDate = currentDate.toLocaleDateString();
          const formattedTime = currentDate.toLocaleTimeString();
          
          let linkk = `https://meucarrinho-zeta.vercel.app/track/${pp}`;
          let textoo = `Caríssimo/a ${info.nome},o seu artigo: ${info.artigo} 📦 chegou ao destino de entrega [${info.endereco2}] e foi recebido/a por ${info.nome2} 👀👌📦🧾 as ${formattedTime}.\n\n Veja aqui: ${linkk}\n\n Obs: Não partilhe este link!\n\n\n Avalie nos na plataforma, como foi sua experiência.\n\nTotal a pagar: **${info.taxa} Kz** \nForma de pagamento: **${info.pagamento}** \n\n\n\n**Atenciosamente, Meu Carrinho LTDA.**`;
          let textoo2 = `Caríssimo/a ${info.nome2},você confirmou que recebeu o artigo enviado(${info.artigo}) 📦. Obrigado por usar ps nossos serviços. \n\nEntregue pelo agente ${ainfo.nome} 📦👌\n\n Veja aqui: ${linkk}\n\n\nTotal: **${info.taxa} Kz**  \n\n Avalie nos na plataforma, como foi sua experiência **Atenciosamente, Meu Carrinho LTDA.**`;
          let textoo3 = `Olá Boss o artigo ${info.artigo} 📦 , foi entregue com sucesso em ${info.endereco2}, recebido por ${info.nome2} em ${formattedDate} as ${formattedTime}. Entregue pelo agente ${ainfo.nome} - ${ainfo.telefone} 🛵!\n\nAcompanhe aqui: ${linkk}\n\n **Atenciosamente, Meu Carrinho LTDA.**`;
          let textoo4 = `Olá Agente ${ainfo.nome} voce concluiu sua entrega com sucesso, parabéns 📦 🛵, \n\nEncomenda: **${info.artigo}**\n\n Total: **${info.taxa} Kz** \n Pagamento: **${info.pagamento}**\n\nFeito em ${formattedDate} as ${formattedTime}.. \nObrigado!\n\n\n **Atenciosamente, Meu Carrinho LTDA.**`;
          msg(info.telefone1, textoo)

          setTimeout(() => {
            msg(info.telefone2, textoo2)
          }, 100);
          setTimeout(() => {
            msg(924358193, textoo3)
          }, 200);
          setTimeout(() => {
            msg(ainfo.telefone, textoo4)
          }, 300);
           
        });
      }
    } catch (error) {
      setLoad(false)
      console.error("Erro ao atualizar telefone: ", error);
      toast.success('Ocorreu um erro ao tentar actualizar seu estado de compra!');
    }
  }


  // const timeAgo = (timestamp) => {
  //   const currentTime = moment();
  //   const timestampTime = moment(timestamp * 1000);
  //   const diffInMinutes = currentTime.diff(timestampTime, 'minutes');
  //   const diffInHours = currentTime.diff(timestampTime, 'hours');
  //   const diffInDays = currentTime.diff(timestampTime, 'days');

  //   if (diffInMinutes < 60) {
  //     return `há ${diffInMinutes} minutos`;chego
  //   } else if (diffInHours < 24) {
  //     return `há ${diffInHours} horas`;
  //   } else {
  //     return `há ${diffInDays} dias`;
  //   }
  // };

  // if (info ? info.dataEnvio : '') {
  // const timestamp = info.dataEnvio; // o timestamp do Firebase
  // const date = timestamp.toDate(); // converter o timestamp para um objeto Date
  // const diffInMinutes = Math.floor((new Date() - date) / (1000 * 60));
  // const [mm, setMM] = useState('');
  // if (diffInMinutes < 60) {
  //   alert(`há ${diffInMinutes} minutos`);
  // } else if (diffInMinutes < 1440) { // menos de um dia
  //   const diffInHours = Math.floor(diffInMinutes / 60);
  //   alert(`há ${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'}`);
  // } else { // mais de um dia
  //   const diffInDays = Math.floor(diffInMinutes / 1440);
  //   alert(`há ${diffInDays} ${diffInDays === 1 ? 'dia' : 'dias'}`);
  // }
  //   // restante do código para calcular a diferença em minutos, horas ou dias
  // } else {
  //   // trate o caso em que info ou info.dataEnvio é undefined
  // }


  document.title = 'Rastreamento de Pedido | Meu Carrinho Compras';
  return (
    <div className="w-100">
      <ToastContainer />
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
        <span className="text-secondary mb-1 f-12">Insira o código de 6 dígtos do seu pedido</span>
        <div className="d-flex">
          <input value={inputValue} onChange={handleInputChange} type="number" placeholder='Ex: 12345678' className='form-control' />
          <NavLink disabled to={'/track/' + inputValue} className="text-center btn btn-danger" style={{ display: 'grid', placeContent: 'center' }}>
            <i className="bi bi-search"></i>
          </NavLink>
        </div>
        <div>

        </div>
        <br />
        {
          info.artigo == '' || info.estado == 'Entregue' ?
            <div>
              <center>
                <img src={bann} style={{ height: '4em', opacity: '.4' }} alt="" /> <br /><br />
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
            info.artigo == '' ?
              '' :

              <center>

                {
                  info.artigo != null &&
                  <div className="c">
                    {
                      info.estado != 'Entregue' ?

                        <>
                          <button onClick={() => Confirmar()} className="btn mx-auto f-14 rounded-1 btn-outline-danger">{load == false ? <span >Confirmar recebimento / Entrega</span> : <Loader />}</button>

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
                        </>
                        :
                        <div>
                          <h2 className="text-danger">Este pedido já foi entregue!</h2>
                        </div>
                    }

                    <br /><br />
                  </div>
                }



                <b className="text-danger ">
                  {info.estado == 'Pendente' && <span><span className="text-warning">Pendente:</span> <span className="fw-light">ainda não foi recolhido!</span></span>}
                  {info.estado == 'Recolhido' && <span><span className="text-warning">Recolhido:</span> <span className="fw-light"> está em trânsito agora!</span></span>}
                  {info.estado == 'Chegou' && <span><span className="text-success">Chegou ao destino:</span> <span className="fw-light text-green"> chegou ao seu destino!</span> <br /> <center>Agente: {ainfo.nome}</center></span>}
                  {info.estado == 'Recebido' && <span><span className="text-success">Entregue:</span> <span className="fw-light"> este artigo já foi recebido!</span></span>}
                </b>
                <hr />
                <center>
                  <br />
                  {/* <span className="text-secondary">Feito há {`${info.dataEnvio}`}</span> */}
                </center>
              </center>

          }
          {
            info.estado != 'Entregue' &&

            <div className="bod">

              <br />
              <br />
              <h2 className='text-secondary f-lilita'>Encomenda: <span className="text-danger">{info.artigo == null ? <span> <br /> Não encontrada! <i className="bi bi-exclamation-triangle"></i></span> : info.artigo}</span> </h2>

              {
                info.artigo != null &&
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
                    Email: <b> {info.email}</b>
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
              }

              {/* <p>Latitude: {position.lat}</p>
        <p>Longitude: {position.lng}</p> */}

            </div>

          }
        </div>
        <br />

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
