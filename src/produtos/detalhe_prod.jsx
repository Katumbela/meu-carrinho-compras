import React, { useEffect, useState } from 'react';
import '../css/destaque.css'
import { NavLink, useParams } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from '../components/header';
import Footer from '../components/footer';
import BannerPreto from '../components/banner_preto';
import produtos from '../pages/lista_prods';
import '../css/detalhe.css';
import axios from 'axios';
import Loader from '../components/loader';

 const DescProd = ({adicionar, cart, idd, remover, handleClick}) => {

    const {id} = useParams();

    const [lista_pro, setLista_pro] = useState([]);


    const getTipo = async () => {
       const result = await axios.get("https://www.garimpo.ga/engenharias/prod_escolher.php?cat=id="+id);
          setLista_pro(result.data[0]);
          console.log(result.data[0])
    }

    useEffect(()=>{
        getTipo();
    }, [])


    const imageUrl = `https://www.garimpo.ga/engenharias/img/${lista_pro.img}`;
  
        

    


    return (
        <>
  <div className='destaque '>
    
  < Header cart={cart} />
        <BannerPreto >
            {lista_pro.tit}
        </BannerPreto>
        <br />
        <div className="container text-start">
        <br />

        <br />
        <center>
            {lista_pro == "" &&
             <center>
                <Loader />
            </center>}
        </center>

        </div>
        <br />
        
<div className="container">

     
        <div className="row prods-set">
            <div className="col-12 col-sm-6 col-md-4 col-lg-6">
                <img src={imageUrl} alt={lista_pro.tit} className="w-100" />
            </div>
            <div className="col-12 text-start py-3 col-sm-6 col-md-8 col-lg-6">
                <h2 style={{textTransform: 'ulista_proercase'}}> {lista_pro.tit} &middot;<span className="text-danger"> Meu Carrinho</span></h2>
                <p className="text-secondary">
                {lista_pro.desc} 
                </p>
                <br />
              <div className="row">
                    
                    <div className="d-flex my-2 col-12 col-md-6">
                        <span  style={{borderRight: '1px solid white'}} className="my-auto me-3 fw-bold text-danger ">
                        {lista_pro.preco} Kz
                        </span>
                        <button onClick={() => adicionar(lista_pro)} className=" btn-carrinho px-4" style={{borderLeft: '1px solid white'}}>
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