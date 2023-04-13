import Carousel from 'react-bootstrap/Carousel';
import '../css/banners.css';
import pub1 from '../imgs/pub1.png';
import loja from '../imgs/ban-loja.png';
import pub3 from '../imgs/pub3.png';
import pub4 from '../imgs/pub4.jpg';
import pub5 from '../imgs/pub5.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';

function Lojas() {
  return (
    <>
    <div className="px-2 bg-light py-1">
      
            <OwlCarousel className='owl-theme lojas' navClass={['owl-prev','owl-next']} margin={15} responsiveClass={false}  dots={false} autoWidth={true} nav={true}>

            <div className="item my-2">
            <div className="card_curso bg-soft">
                <div className="card-header">
                    <img src={loja} alt="loja" />
                    <div className="corpo container">
                    <b>LOJA DE EXEMPLO</b>
                    <div className="d-flex">
                        <i className="bi bi-check-circle me-1 text-danger"></i>
                        <span className='f-14'>Aberto</span>
                        
                    </div>
                    <NavLink to={'/merchants/mercant/ref/loja1'}>
                    <button style={{height:'2em'}} className="w-100 btn-carrinho-p mb-2">
                            Ir para Loja
                        </button>
                    </NavLink>
                    </div>
                </div>
            </div>
        </div>

        <div className="item my-2">
            <div className="card_curso bg-soft">
                <div className="card-header">
                    <img src={loja} alt="loja" />
                    <div className="corpo container">
                    <b>LOJA DE EXEMPLO</b>
                    <div className="d-flex">
                        <i className="bi bi-check-circle me-1 text-danger"></i>
                        <span className='f-14'>Aberto</span>
                        
                    </div>
                    <button style={{height:'2em'}} className="w-100 btn-carrinho-p mb-2">
                            Ir para Loja
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="item my-2">
            <div className="card_curso bg-soft">
                <div className="card-header">
                    <img src={loja} alt="loja" />
                    <div className="corpo container">
                    <b>LOJA DE EXEMPLO</b>
                    <div className="d-flex">
                        <i className="bi bi-check-circle me-1 text-danger"></i>
                        <span className='f-14'>Aberto</span>
                        
                    </div>
                    <button style={{height:'2em'}} className="w-100 btn-carrinho-p mb-2">
                            Ir para Loja
                        </button>
                    </div>
                </div>
            </div>
        </div>

      

        </OwlCarousel>
        <br />
    </div>

    <br />
    </>
  );
}

export default Lojas;