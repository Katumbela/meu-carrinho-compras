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
import Loader from '../components/loader';
import { db } from './firebase';

const Formulario = ({ handleClick, cart, adicionar, pro_p_cat, remover }) => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [artigo, setArtigo] = useState("");
    const [tel, setTel] = useState("");
    const [address1, setAd1] = useState("");
    const [address2, setAd2] = useState("");
    const [nome2, setN2] = useState("");
    const [tel2, setTel2] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [loggedIn, setLoggedI2n] = useState(false);
    
    
  const [randomNumber, setrandomNumber] = useState(null);

  function gerar() {
    const min = 100000;
    const max = 999999;
    const newRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    
    setrandomNumber(newRandomNumber);
  }

    let taxa = 0;
    const [price, setPrice] = useState("");

    if (address1.toLowerCase().includes('kilamba')) {
        taxa = 500.00;
    }
    else if (address1.toLowerCase().includes('via expressa') || address1.toLowerCase().includes('camama') || address1.toLowerCase().includes('patriota') || address1.toLowerCase().includes('benfica') || address1.toLowerCase().includes('Zango 0')) {
        taxa = 1500;
    }
    else if (address1.toLowerCase().includes('nova vida') || address1.toLowerCase().includes('nova-vida') || address1.toLowerCase().includes('projecto nova vida') || address1.toLowerCase().includes('gamek') || address1.toLowerCase().includes('nosso centro') || address1.toLowerCase().includes('talatona') || address1.toLowerCase().includes('morro bento') || address1.toLowerCase().includes('morro-bento')) {
        taxa = 1795;
    }
    else if (address1.toLowerCase().includes('futungo') || address1.toLowerCase().includes('golf 2') || address1.toLowerCase().includes('golf II') || address1.toLowerCase().includes('golf-2') || address1.toLowerCase().includes('golf-1') || address1.toLowerCase().includes('golf 1')) {
        taxa = 1800;
    }
    else if (address1.toLowerCase().includes('sao paulo') || address1.toLowerCase().includes('são paulo') || address1.toLowerCase().includes('são-paulo') || address1.toLowerCase().includes('sao-paulo')) {
        taxa = 2500;
    }
    else if (address1.toLowerCase().includes('Zango 3') || address1.toLowerCase().includes('zango 4') || address1.toLowerCase().includes('zango-3') || address1.toLowerCase().includes('zango-4')) {
        taxa = 2500;
    }
    else if (address1.toLowerCase().includes('viana') || address1.toLowerCase().includes('kimbangu') || address1.toLowerCase().includes('kimbango') || address1.toLowerCase().includes('kapolo') || address1.toLowerCase().includes('capolo') || address1.toLowerCase().includes('palanca')) {
        taxa = 2000;
    }
    else if (address1.toLowerCase().includes('centro da cidade') || address1.toLowerCase().includes('aeroporto') || address1.toLowerCase().includes('rocha pinto') || address1.toLowerCase().includes('rocha-pinto') || address1.toLowerCase().includes('cassenda') || address1.toLowerCase().includes('mártires') || address1.toLowerCase().includes('martires') || address1.toLowerCase().includes('alvalade') || address1.toLowerCase().includes('vila alice') || address1.toLowerCase().includes('vila-alice') || address1.toLowerCase().includes('kinaxixi') || address1.toLowerCase().includes('miramar') || address1.toLowerCase().includes('mutamba')) {
        taxa = 2000;
    }
    else if (address1.toLowerCase().includes('zango 1') || address1.toLowerCase().includes('zango-1') || address1.toLowerCase().includes('zango-2') || address1.toLowerCase().includes('zango 2')) {
        taxa = 2000;
    }
    else if (address1.toLowerCase().includes('sequele')) {
        taxa = 3500;
    }
    else if (address1.toLowerCase().includes('porto de luanda')) {
        taxa = 1000;
    }
    else if (address1.toLowerCase().includes('maianga')) {
        taxa = 500;
    }
    else if (address1.toLowerCase().includes('cidade')) {
        taxa = 2500;
    }
    else if (address1.toLowerCase().includes('cacuaco')) {
        taxa = 7000;
    }
    else if (address1.toLowerCase().includes('zango 8000') || address1.toLowerCase().includes('zango-8000') || address1.toLowerCase().includes('zango 8mil')) {
        taxa = 5000;
    }
    else if (address1.toLowerCase().includes('zango 5000') || address1.toLowerCase().includes('zango-5000') || address1.toLowerCase().includes('zango 5mil')) {
        taxa = 4000;
    }
    else {
        taxa = 3000;
    }


    const [selectedValue, setSelectedValue] = useState('');

    function handleRadioChange(event) {
        setSelectedValue(event.target.value);
    }



    const options = ['Futungo', 'Sequele', 'Cacuaco', 'Cidade', 'Maianga', 'Porto de Luanda', 'Zango 5mil', 'zango 8mil', 'Viana', 'Zango 3', 'Mártires', 'Zango 4', 'Kimbangu', 'Aeroporto', 'Zango 2', 'Rocha Pinto', 'Zango 8000', 'Zango 5000', 'Kapolo', 'Zango 1', 'São Paulo', 'Kilamba', 'Cassenda', 'Nova vida', 'Golf 2', 'Mutamba', 'Golf 1', 'Via Expressa', 'camama', 'patriota', 'benfica', 'Zango 0', 'Alvalade', 'Vila Alice', 'Projecto Nova Vida', 'Gamek', 'Talatona', 'Morro Bento', 'Kinaxixi', 'Miramar'];



    const [message, setMessage] = useState([]);
    const [load, setLoad] = useState(false);



    const enviar = async () => {
        setLoad(true);
        try {
          const dados = {
            dataEnvio: new Date(),
            email: email,
            pedido: randomNumber,
            endereco1:address1,
            telefone1: tel,
            nome: nome,
            telefone2:tel2,
            artigo:artigo,
            endereco2:address2,
            taxa: taxa,
            nome2:nome2,
            estado: 'Pendente',
            pagamento: selectedValue,
          };
      
          const querySnapshot = await db.collection("pedidos")
            .where("nome", "==", nome)
            .where("pedido", "==", randomNumber)
            .get();
      
          if (querySnapshot.empty) { // se não encontrar documentos, adiciona
            const docRef = await db.collection("pedidos").add(dados);
            console.log("cadastrado");
            setMessage('sucesso');
            setLoad(false);
            toast.success('Seus pedido foi adicionado com sucesso, estamos indo!');
          } else { // se encontrar documentos, informa que já existe
            console.log("usuario cadastrado.");
          }
        } catch (error) {
            toast.error('Ocorreu um erro, verifique sua conexão ou tente mais tarde!');
          console.error("Erro ao adicionar documento: ", error);
        }
      }


    document.title = 'Solicitacao de servico de Mobilidade | Meu Carrinho ';
    return (
        <div className="w-100">
            <ToastContainer />
            <div className="bg-white nav-b fixed justify-content-between d-flex px-3 py-3" style={{}}>
                <NavLink to={'/'}>
                    <img src={bann} style={{ height: '1.6em' }} alt="" />
                </NavLink>
                <b className="text-danger f-lilita">Solicitar Serviço</b>
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
                    message == 'sucesso' ?

                        <center className='my-4 container'>
                            <img src={ban} style={{ height: '6em' }} alt="" />

                            <div className='my-4'>
                                <span className=" p-1 anim anim-scale rounded-circle" style={{ right: '.5rem', bottom: '.5rem', height: '1.6rem', width: '1.6rem', display: 'grid', placeContent: 'center' }}>
                                    <i className="bi bi-check2-circle f-60 text-danger"></i>
                                </span>
                            </div>
                            <p className="text-danger">
                                Seu pedido foi feito com sucesso, estamos dando início a recolha do seu artigo
                            </p>
                            <span className="text-secondary f-12 w-75">
                                Enviamos o link de rastreio do seu pedido no pelo Whatsapp <br />
                                Pedido N: <br />
                            </span>
                            <b className="f-20 text-danger">#{randomNumber}</b>
                            <br />
                            <br />
                            <NavLink to={'/track/' + randomNumber} className="btn btn-outline-danger f-12">
                                OK
                            </NavLink>

                        </center>

                        :
                        <div className="for">
                            <h5 className="f-lilita text-danger">O que pretende enviar/receber</h5>

                            <br />
                            <textarea name="" value={artigo} onChange={(e) => setArtigo(e.target.value)} id="oque" cols="30" rows="2" placeholder='Descreva o produto a ser levantado. Ex: Carvão, documentos, chaves' className="form-control"></textarea>
                            <br />

                            <h5 className="text-danger f-lilita">Opções levantar</h5>
                            <br />
                            <div className="input py-2">
                                <span className="text-secondary f-14">Nome <span className="text-danger">*</span></span>
                                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" name="" placeholder='Digite seu nome' id="" className="form-control in" />
                            </div>
                            <div className="input py-2">
                                <span className="text-secondary f-14">Email <span className="text-secondary f-10">( opcional )</span></span>
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

                            <h5 className="f-lilita text-danger">Entregar para</h5>

                            <br />

                            <div className="input py-2">
                                <span className="text-secondary f-14">Nome <span className="text-danger">*</span></span>
                                <input type="text" autoComplete='false' value={nome2} onChange={(e) => setN2(e.target.value)} name="" placeholder='Digite o nome da pessoa' id="" className="form-control in" />

                            </div>
                            <div className="input py-2">
                                <span className="text-secondary f-14">Telefone <span className="text-danger">*</span></span>
                                <input type="text" autoComplete='false' value={tel2} onChange={(e) => setTel2(e.target.value)} name="" placeholder='Digite o tel da pessoa' id="" className="form-control in" />

                            </div>
                            <div className="input py-2">
                                <span className="text-secondary f-14">Endereço <span className="text-danger">*</span></span>
                                <input list='opcoes' type="text" autoComplete='false' value={address2} onChange={(e) => setAd2(e.target.value)} name="" placeholder='Digite o endereço' id="" className="form-control in" />
                                <datalist className='custom-datalist' id="opcoes">
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
                                load == false ?
                                    <button disabled={!address1 || !nome || !tel2 || !artigo || !tel} data-bs-toggle="modal" onClick={()=>gerar()} data-bs-target="#staticBackdrop" className="btn rounded-1 w-100 btn-danger">
                                        Finalizar Pedido
                                    </button>
                                    :
                                    <center>
                                        <Loader />
                                    </center>
                            }
                        </div>
                }


                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>



            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Pedido #{randomNumber}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button f-lilita text-danger ac" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Resumo do Pedido
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="d-flex justify-content-between my-2">
                                                <span className="f-12 text-secondary">Subtotal</span>
                                                <span className="f-12 text-secondary">Kz 0.00</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-2">
                                                <span className="f-12 text-secondary">Taxa de Serviço</span>
                                                <span className="f-12 text-secondary">Kz {taxa}.00</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-2">
                                                <b className="f-12 text-secondary">Total</b>
                                                <b className="f-12 text-secondary">Kz {taxa}.00</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button ac text-danger f-lilita collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Detalhes do Pedido
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                        <div className="accordion-body">

                                            <div className="d-flex justify-content-between my-2">
                                                <span className="f-12 text-secondary">Nome</span>
                                                <span className="f-12 text-secondary">{nome}</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-2">
                                                <span className="f-12 text-secondary">Telefone</span>
                                                <span className="f-12 text-secondary">{tel}</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-2">
                                                <span className="f-12 text-secondary">Email</span>
                                                <span className="f-12 text-secondary">{email}</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-2">
                                                <span className="f-12 text-secondary">Artigo/produto</span>
                                                <span className="f-12 text-secondary">{artigo}</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-2">
                                                <b className="f-12 text-secondary">Ponto de recolha</b>
                                                <span className="f-12 text-secondary">{address1}</span>
                                            </div>
                                            <div className="d-flex justify-content-between my-2">
                                                <b className="f-12 text-secondary">Ponto de Entrega</b>
                                                <span className="f-12 text-secondary">{address2}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mt-4 justify-content-between">

                                    <div className="" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span className="text-secondary f-14">Precisa de ajuda ?</span>
                                        <span className="text-secondary f-12">Estamos aqui para ajudar</span>
                                    </div>
                                    <div className="">
                                        <a href="https://wa.me/244934131274" style={{ textDecoration: 'none' }} className="bg-danger py-1 my-auto rounded-1 px-1 text-white f-12">
                                            Conver...connosco
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex mt-4 justify-content-between">

                                    <div className="" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <b className="text-secondary f-14">Metodo de pagamento </b>
                                      
                                        
    <div>
      <label>
        <input
          type="radio"
          value="Pay Pay"
          checked={selectedValue === 'Pay Pay'}
          onChange={handleRadioChange}
        />
        <b className="text-danger ms-1 f-lilita">Pay Pay</b>
      </label>

      <label className='mx-2'>
        <input
          type="radio"
          value="Multicaixa Express"
          checked={selectedValue === 'Multicaixa Express'}
          onChange={handleRadioChange}
        />
        <b className="text-danger ms-1 f-lilita">MCX</b>
      </label>

      <label>
        <input
          type="radio"
          value="Pagar no Local"
          checked={selectedValue === 'Pagar no Local'}
          onChange={handleRadioChange}
        />
        <b className="text-danger f-lilita ms-1">Pagar no Local</b>
      </label>
<br />
      <p>Escolhido: <b className="f-lilita">{selectedValue}</b></p>
    </div>

                                    </div>
                                    <div className="">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Cancelar</button>


                            <button type="button" disabled={!selectedValue} data-bs-dismiss="modal" onClick={() => enviar()} className="btn btn-danger">Confirmar</button>

                        </div>
                    </div>
                </div>
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
                <center className='f-14'>
                    &copy; Meu Carrinho - 2023
                </center>

            </footer>





        </div>
    );
}

export default Formulario;
