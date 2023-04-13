import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Produtos from '../components/loja/produtos';

const Cart = ({cart, handleClick, adicionar, remover}) => {

  let preco = 0 ;
  let qnt = 0 ;
  cart.map((item) => (preco +=  item.preco * item.qty));
  cart.map((item) => (qnt +=  item.qty ));



  // const precos = () => {
  //   let ans = 0;
  //   cart.map((item) => (ans +=  item[0].preco));
  //   setPreco(ans);
  // }

  // useEffect(() => {
  //   precos();
    return (
      <div className='bg-white carrinho'>
      <div className="container">
        <br />
        <div className="d-flex justify-content-between">

        <h2>Meu Carrinho</h2>
        <span className='f-26 my-auto'>
            <NavLink className={'navlink text-danger'} to={'/'}>
                &times;
            </NavLink>
        </span>
        </div>
        {/* 
        <article >
          {cart.map((item) => (
            <div className="my-2" key={item.id}>
              <div className='d-flex'>
                <div className="im">
                  <img style={{height:'6em'}} src={item[0].img} alt="" />
                </div>
                <div className="my-auto ms-3">
                <h3>{item[0].tit}</h3>
                <p>Preço: {item[0].preco} Kz</p>
                <button onClick={(id)=>{ const arr  = cart.filter((item) => item.id !== id);
    setCart(arr);
    precos();}} className="btn f-12 btn-outline-danger" style={{height: '2em', lineHeight: '0', fontSize: '12px'}}>
                  Remover <i className="bi bi-trash f-12"></i> 
                </button>
            </div>
             
      
            </div>
            <hr />
            </div>
          ))}
          

          <br />
          <div className="row">
            <div className="col-6 col-md-8">
               <h4>Total: {preco}</h4>
            </div>
            <div className="col-6 col-md-4 text-end">
               <button className="btn btn-primary">Finalizar compra</button>
            </div>
          </div>
          <br />
          <br />

        </article> 
        */}
        <div className="d-flex flex-column">
          <b className=" f-14">
            Entregas em {(qnt*5)}min..

          </b>
          <span className='fw-light f-12'>{qnt} Itens no carrinho</span>
        </div>
        <hr />
        {
          cart.length === 0 && <div className="text-center">
            <i className="bi bi-cart carrinh f-26"></i><br />
            <span className="text-secondary">Seu Carrinho está vazio</span>
            </div>
        }
         {
            cart.map((item) => (
              <div className=""  key={item.id}>

                  <div>
                    <div className="d-flex gap-2">
                      <div className="imgg border ">
                        <img src={item.img} style={{height: '3.5em'}} alt="" />
                      </div>
                      <div className="item_desc w-100">
                        <span className='fw-light'>{item.tit}</span>
                        <div className="precoebtn justify-content-between w-100 d-flex mt-3">
                          <b className='fw-normal f-14'>{item.preco} Kz</b>
                          <button style={{height:'2em'}} className="d-flex btn-carrinho-p">
                            <span onClick={() => remover(item)}>-</span><span className='mx-3'>{item.qty}</span><span onClick={() => adicionar(item)}>+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
              </div>
                )
            )
          }
          <br />

{cart.length !== 0 && 
<div className="">
<div className="pub">
<h5>Antes de finalizar...</h5>
<Produtos cart={cart} handleClick={handleClick}/>
</div>


<div className="datas">
  <div className="h5">Dados da compra</div>
  <div style={{borderTop: '.8px dotted #d9d9d9'}} className="d-flex py-1 justify-content-between">
    <b className="f-16 fw-normal">Total de compra</b>
    <span className='f-16 fw-light'>{preco} Kz</span>
  </div>
  <div style={{borderTop: '.8px dotted #d9d9d9'}} className="d-flex py-1 justify-content-between">
    <b className="f-16 fw-normal">Taxa de Entrega</b>
    <span className='f-16 fw-light'>{preco*0.5} Kz</span>
  </div>
  <div style={{borderTop: '.8px dotted #d9d9d9'}} className="d-flex pt-1 justify-content-between">
    <b className="f-16 fw-normal">Taxa de IVA</b>
    <span className='f-16 fw-light'>{preco*0.14} Kz</span>
  </div>
</div>

</div>
}


<br /><br />
<br /><br />
<br /><br />

          <div className="  ">

              <div className="bg-danger justify-content-between d-flex container my-cartt py-2 rounded-2">
                <div className="d-flex flex-column">
                  <span className="f-12 text-white">{qnt} Itens</span>
                  <span className="text-white fw-light f-16">
                    Total: {preco + preco*0.5 + preco*0.14} Kzs
                  </span>
                </div>
                <div className='my-auto'>
                  <b className="fw-light text-white my-auto f-16">Finalizar <i className="bi bi-arrow-right-short "></i></b>
                </div>
              </div>
          </div>

      </div>
      

      </div>
    );
  };
export default Cart;