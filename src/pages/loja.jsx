import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import DivLoja from '../components/loja/div_prods';
import BannerPreto from '../components/banner_preto';

const Loja = (props) => {
  const {cart, handleClick} =props;

    document.title='Categoria | MeuCarrinho Compras';
  
    return (
    <div className="w-100 bg-white">
      
      < Header cart={cart} />
      <BannerPreto>
        Nome da categoria
      </BannerPreto>
      <br />
      <h2 className='mx-2 fw-normal'>Compre $categoria online</h2>
      <br />
      <DivLoja cart={cart} handleClick={handleClick} />
      <br />
      <br />
      < Footer />
      
    </div>
  );
}

export default Loja;
