import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/card_prods.css';

const CardP = (props) => {

    const { item, adicionar, remover, cart, handleClick } = props;

const {id, tit, preco, qty, img, sponsor, plus, cad, promo} = item;

        const existe = cart.find((x) => x.id === item.id);
        
let p = 0;
    return (
        <div className="item">
                <div className="itemm">
                    <div className="card_prods  bg-white px-3 my-3 mx-auto">
                    {cad == 1 ? <div  style={{height:'1.2em', lineHeight:'1rem', width: '', position:'relative'}} className="bg-danger shadow text-white">
                                <span className="f-10"><i className="bi bi-bell"></i> Consumir até 24-04-23 </span>
                            </div> : ""}
                        <div className="card-headerr rounded-2" style={{border: '.5px solid #d9d9d9', display:'grid', placeContent: 'center'}}>
                            <NavLink title='Ver Produto' className="navlink" to={'/produtos/store/'+ id } style={{position:'absolute', left:'.5rem'}} ><i className="bi bi-eye text-danger"></i></NavLink>
                            {sponsor == 1 ? <div  style={{height:'.8em', lineHeight:'.5rem', width: '5em', position:'absolute', right:'0',top: '.5rem'}} className="bg-carrinho shadow text-danger">
                                <span className="f-10">Patrocinado</span>
                            </div> : ""}
                             {plus == 1 ? <div  style={{height:'.8em', lineHeight:'.5rem', width: '4em', position:'absolute', left:'0',top: '1.5rem', padding: '0'}} className="bg-success shadow text-white">
                                <span className="f-10 ps-2">+ Vendido</span>
                            </div> : ""}
                            <div>
                            <img src={img} alt={img} />
                            <div className="text-start">
                            <span style={{float: 'left'}} className='b f-14'>{tit}</span>
                            </div>
                            </div>
                        </div>

                        <div className="corpo-lojas text-start">
                           
                            <p className='precos d-flex justify-content-between mt-2'>
                                {promo == 1 ? <div  style={{display: 'flex', flexDirection:'column', gap:'0'}} className="fw-light"><b style={{textDecoration:'line-through'}} className='text-secondary f-10 '>  {preco} <span style={{fontSize: '8px'}} className="">Kz</span></b> <b className='f-16'>{preco - preco * 0.18}<span style={{fontSize: '8px'}} className=""> Kz</span></b></div> : <b style={{textDecoration:''}} className='tex-danger fw-normal'>  {preco} <span className="f-10">Kz</span></b>}
                              
                                {/* <button style={{height:'2em'}} className="d-flex btn-carrinho-p">
                                <span onClick={() => remover(item)}>-</span><span className='mx-3'>{item.qty}</span><span onClick={() => adicionar(item)}>+</span>
                              </button> */}
                                          <button onClick={() => handleClick(item)} className="btn-carrinho-p fw-normal text-danger f-14">Comprar </button> 
                            </p>
                        </div>
                    </div>
                </div>
    </div>

        
    );
}

export default CardP;
