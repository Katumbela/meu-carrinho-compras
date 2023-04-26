import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import DivLoja from '../components/loja/div_prods';
import BannerPreto from '../components/banner_preto';

const Loja = ({handleClick, cart, cat}) => {

    document.title='Ver Todos os Produtos | Meu Carrinho';
  
    return (
    <div className=" bg-light">
      
      < Header cart={cart} />
      <BannerPreto>
        Meu Carrinho Compras
      </BannerPreto>
      <br />
      <br />
      <DivLoja cart={cart} handleClick={handleClick}/>
      <br />
      <br />
      < Footer />
      
    </div>
  );
}

export default Loja;
