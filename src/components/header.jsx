import React, { useEffect } from 'react';
import logo from '../imgs/logo.png';
import '../css/header.css';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const Header = (props) => {
  const {cart} = props;
  let preco = 0 ;
  let qnt = 0 ;
  cart.map((item) => (preco +=  item.preco * item.qty));
  cart.map((item) => (qnt +=  item.qty ));


    return(

  <header className='bg-carrinho w-100'>
    <div className=" row my-nav" style={{height:'4em', borderBottom:'.5px solid red'}}>
            
        <div className="py-3 col-12 logo col-md-2 px-3" style={{ borderRight:'.5px solid red'}}>
        <NavLink className="link my-auto" to="/" ><img src={logo} alt="logo carrinho" className='w-100 my-auto' /></NavLink> 
        </div>
                
        <div className='px-2 my-s-div  col-12 col-sm-3 my-auto col-md-2 '>
        <div  style={{display:'flex', flexDirection:'column'}} className="my-auto">
        <b className='f-10'>Entregamos em 40min</b>
        <span className="f-10">Agentes por toda a parte...</span>
        </div>
        </div>
        <div className="inputs col-12 col-md-6 col-md-8  d-flex " >
        <NavLink to={'/s/'} className={' w-100 my-auto navlink'} >
          <div className="d-flex rounded-3 my-auto px-2" style={{background: '#FFF8B9', border:'.7px solid red', height: '2.5em'}}>
              <i className="bi bi-search my-auto text-danger"></i>
          <input disabled style={{background:'none', border:'none', outline:'none'  }} type="text" placeholder='Pesquisar por...' className="px-2" />
          </div>
        </NavLink>
        {/* <button className="ms-1 btn-carrinho f-12">Parceiro</button>
        <button className="ms-1 me-2 btn-carrinho f-12">Login</button> */}
          <NavLink className={'text-danger loginn navlink my-auto mx-1'}>
            <span className="log">
            Login
            </span>
            <div className="bii">
            <i className="bi bi-person"></i></div>
          </NavLink>
<NavLink className={'navlink my-cart my-auto'} to={'/cart'} >
<button className="ms-1 me-1 btn-carrinho d-flex f-12" style={{width: '7em'}}>
  <div className="d-flex text-start flex-column">
    <span className="f-10">{qnt} Itens</span>
    <span className='f-10 d-flex tot'><span className=" tot1">Total: </span> {preco} Kz</span>
  </div>
  <i className="bi bi-cart my-auto ms-1 f-18"></i>
</button>
</NavLink>
        </div>
    </div>

  </header>
);
};

export default Header;
