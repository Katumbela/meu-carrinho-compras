import produtos from '../../pages/lista_prods'; 
import'../../css/div_loja.css'
import Card from './card';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardP from './card_prods';

const Produtos = (props) => {
    const {handleClick, adicionar, remover,  cart} = props;
    return (
  <div className='  text-center'>
   

            <OwlCarousel className='owl-theme bans' navClass={['owl-prev','owl-next']} margin={15} responsiveClass={false}  dots={false} autoWidth={true} nav={false}>
                {
                        produtos.map((item) => (
                            <CardP  adicionar={adicionar} remover={remover} handleClick={handleClick} cart = {cart} key={item.id} item={item}/>
                            )
                        )
                    }
            </OwlCarousel>
        </div>
)
    }

export default Produtos;