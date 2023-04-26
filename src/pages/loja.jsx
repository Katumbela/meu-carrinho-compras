import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import DivLoja from '../components/loja/div_prods';
import BannerPreto from '../components/banner_preto';
import { useParams } from 'react-router-dom';

const Loja = (props) => {
  const {cat} = useParams();
  const {cart, categoria, handleClick} =props;

    document.title='Categoria | MeuCarrinho Compras';
  
    return (
    <div className="w-100 bg-white">
      
      < Header cart={cart} />
      <BannerPreto>
        Categoria: {cat}
      </BannerPreto>
      <br />
      <h2 className='mx-2 fw-normal'>Compre {cat} online</h2>
      <br />
      <DivLoja cat={cat} cart={cart} handleClick={handleClick} />
      <br />
      <br />
      < Footer />
      
    </div>
  );
}

export default Loja;
