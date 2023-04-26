import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';
import Lojas from '../components/lojas';
import DivLoja from '../components/loja/div_prods';
import Produtos from '../components/loja/produtos';
import { NavLink } from 'react-router-dom';

const Home = ( {handleClick, cart, adicionar,  pro_p_cat, remover}) => {

  
  document.title='Inicial | Meu Carrinho Compras';
  return (
    <div className="w-100">
      
      < Header cart={cart} />
      <div className="s">
         <Banners />
      <br />
      <Lojas pro_p_cat={pro_p_cat}/>
      <br />

      <div className="prods px-xxl-4 px-2">
       <div className="justify-content-between d-flex">
       <h2>Bebidas, espumantes & Alcool</h2>
       <NavLink to={'/produtos/ver_tudo/bebida'} className="text-danger">Ver tudo</NavLink>
       </div>
        <br />
        <Produtos cat='bebida' pro_p_cat={pro_p_cat} adicionar={adicionar}  handleClick={handleClick} cart={cart}/>
      </div>

<br />


<div className="prods px-xxl-4 px-2">
 <div className="justify-content-between d-flex">
 <h2>Farmàcia e bla bla</h2>
    <NavLink to={'/produtos/ver_tudo/farmacia'} className="text-danger">Ver tudo</NavLink>
 </div>

  <br />
  <Produtos cat='farmacia' adicionar={adicionar} cart= {cart} handleClick={handleClick}/>
</div>

      < Footer />
      </div>
     
        
    </div>
  );
}

export default Home;
