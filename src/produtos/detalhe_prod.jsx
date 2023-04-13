import React from 'react';
import '../css/destaque.css'
import { NavLink, useParams } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from '../components/header';
import Footer from '../components/footer';
import BannerPreto from '../components/banner_preto';
import produtos from '../pages/lista_prods';
import '../css/detalhe.css';

function DescProd (props) {
    const {adicionar, cart,  remover, handleClick} = props;
    const {id} = useParams();
    const pp = produtos.filter(p => p.id == id);
    


    return (
        <>
  <div className='destaque '>
    
  < Header cart={cart} />
        <BannerPreto >
            {pp[0].tit}
        </BannerPreto>
        <br />
        <div className="container text-start">

        <NavLink to={'/loja'}><i className="bi bi-arrow-left"></i> Voltar</NavLink>
        <br />

        </div>
        <br />
        
<div className="container">

     
        <div className="row prods-set">
            <div className="col-12 col-sm-6 col-md-4 col-lg-6">
                <img src={pp[0].img} alt="Banner Arobot" className="w-100" />
            </div>
            <div className="col-12 text-start py-3 col-sm-6 col-md-8 col-lg-6">
                <h2 style={{textTransform: 'uppercase'}}> {pp[0].tit} &middot; AROTEC</h2>
                <p className="text-secondary">
                {pp[0].desc} 
                </p>
                <br />
              <div className="row">
                    
                    <div className="d-flex my-2 col-12 col-md-6">
                        <span  style={{borderRight: '1px solid white'}} className="my-auto me-3 fw-bold text-danger ">
                        {pp[0].preco} Kz
                        </span>
                        <button onClick={() => adicionar(pp)} className=" btn-carrinho px-4" style={{borderLeft: '1px solid white'}}>
                        Adicionar <i className="bi ms-2 bi-cart"></i>
                        </button>
                    </div>
              </div>
            </div>
        </div>

</div>

<br />
<br />
<br />
<br />


<Footer />
  </div>
        </>
)
    }

export default DescProd;