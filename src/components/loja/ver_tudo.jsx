import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import DivLoja from '../components/loja/div_prods';
import BannerPreto from '../components/banner_preto';

const Loja = ({handleClick, cart, cat}) => {

    document.title='Ver Todos os Produtos | AROTEC';
  
    return (
    <div className=" bg-light">
      
      < Header cart={cart} />
      <BannerPreto>
        LOJA AROTEC
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
