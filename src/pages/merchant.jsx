import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import banner from '../imgs/ban-loja.png'
import Footer from '../components/footer';
import DivLoja from '../components/loja/div_prods';
import BannerPreto from '../components/banner_preto';
import { NavLink, useParams } from 'react-router-dom';
import Produtos from '../components/loja/produtos';
import ProdutosM from '../components/loja/produtos_merchant';

const Merchant = (props) => {
  const {idloja} = useParams();
  const {adicionar, remover, cart, handleClick} = props;

    document.title='Loja | Meu Carrinho';
  
    return (
    <div className="w-100 bg-white">
      
      < Header cart={cart} />
      <div className="baner-loja position-relative">
        {/* <img src={banner} alt="" className='w-100'/> */}
        <div style={{position: 'absolute', bottom:'0', left:'0', right:'0'}} className="detalhe-merc py-2  py-lg-5 px-3 px-md-4 px-lg-4">
            <h2>Nome da Looja </h2>
            <p className="" style={{display:'flex', flexDirection:'column'}}>
                <span><i className="bi bi-geo"></i> <span className="ms-2">Kilamba, Luanda</span></span>
                <span><i className="bi bi-check-circle me-2"></i> <span>Aberto</span></span>
                <span className="d-flex gap-2 ms-4">
                    <i className="bi text-warning bi-star-fill"></i>
                    <i className="bi text-warning bi-star-fill"></i>
                    <i className="bi text-warning bi-star-half"></i>
                    <i className="bi text-warning bi-star"></i>
                </span>
            </p>
        </div>
      </div>
      {/* <BannerPreto>
       <div className="owl-carousel owl-theme">
        <NavLink style={{background: '#ff5e5eab', textDecoration: 'none'}} className='rounded-pill  text-white f-12 py-1 my-auto px-4'>Frutas & Vegetais</NavLink>
        <NavLink style={{background: '#ff5e5eab', textDecoration: 'none'}} className='rounded-pill  ms-2 text-white f-12 py-1 my-auto px-4'>Frutas & Vegetais</NavLink>
        <NavLink style={{background: '#ff5e5eab', textDecoration: 'none'}} className='rounded-pill  ms-2 text-white f-12 py-1 my-auto px-4'>Frutas & Vegetais</NavLink>
        <NavLink style={{background: '#ff5e5eab', textDecoration: 'none'}} className='rounded-pill  ms-2 text-white f-12 py-1 my-auto px-4'>Frutas & Vegetais</NavLink>
       </div>
      </BannerPreto> */}
      <br />
      <div className="">

            <h2 className='mx-2 fw-normal'>Em promoção</h2>
            
            <ProdutosM cat={'promo=1 AND loja='+idloja} cart={cart}  handleClick={handleClick}  adicionar={adicionar} remover={remover} />
      </div>

      <div className="">

            <h2 className='mx-2 fw-normal'>Proximo a Caducidade</h2>
            
            <ProdutosM cat={'cad=1 AND loja='+idloja} cart={cart} handleClick={handleClick} adicionar={adicionar} remover={remover}/>
            <br />
      </div>

      <div className="">

            <h2 className='mx-2 fw-normal'>Em Estoque</h2>
            
            <ProdutosM cat={'cad!=1 AND loja='+idloja} cart={cart} handleClick={handleClick}  adicionar={adicionar} remover={remover} />
            <br />
      </div>
      <br />
      < Footer />
      
    </div>
  );
}

export default Merchant;
