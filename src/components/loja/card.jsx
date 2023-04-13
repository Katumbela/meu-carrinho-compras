import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Card = (props) => {

const {item, handleClick, cart} = props;
const {id, tit, preco, img, plus, sponsor, promo} = item;


    return (
        <div className="navlink col-6 col-sm-3 col-md- col-xxl-2 col-lg-2" to={'/produtos/store/'+ id } >
                <div className="item">
                    <div style={{border: '.5px solid #d9d9d9'}} className="card_prod-lojas position-relative bg-white px-3">
                        <NavLink to={'/produtos/store/'+ id } style={{position: 'absolute', left: '.5rem'}}><i className="bi bi-eye text-danger"></i></NavLink>
                            {sponsor == 1 ? <div  style={{height:'.8em', lineHeight:'.5rem', width: '5em', position:'absolute', right:'0',top: '.5rem'}} className="bg-danger shadow text-white">
                                <span className="f-10 ps-2">Patrocinado</span>
                            </div> : ""}
                             {plus == 1 ? <div  style={{height:'.8em', lineHeight:'.5rem', width: '4em', position:'absolute', left:'0',top: '1.5rem', padding: '0'}} className="bg-success shadow text-white">
                                <span className="f-10 ps-2">+ Vendido</span>
                            </div> : ""}
                        <div className="card-headerr">
                            <img src={img} alt="Produto imagem" />
                            <b className="f-14 fw-normal text-left">{tit}</b>
                        </div>
                        <div className="corpo-lojas text-start" style={{marginBottom:'-2.5rem', marginTop:'1rem'}}>
                           
                            <p className='precos d-flex justify-content-between mt-2'>
                                {promo == 1 ? <div style={{display: 'flex', flexDirection:'column', gap:'0'}} className=""><b style={{textDecoration:'line-through'}} className='text-secondary f-10 '>  {preco} <span style={{fontSize: '8px'}} className="">Kz</span></b> <b className='f-14 text-danger'>{preco - preco * 0.18}<span style={{fontSize: '8px'}} className=""> Kz</span></b></div> : <b style={{textDecoration:''}} className='text-danger f-14'>  {preco} <span className="f-10">Kz</span></b>}
                                <button onClick={() => handleClick(item)} className="btn-carrinho-p text-danger">Comprar</button>
                            </p>
                        </div>
                    </div>
                </div>
        </div>

    );
}

export default Card;