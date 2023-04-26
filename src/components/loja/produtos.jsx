import'../../css/div_loja.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardP from './card_prods';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Loader from '../loader';

const Produtos = (props) => {
    const {handleClick, adicionar, remover, cat, cart} = props;
    const [lista_pro, setLista_pro] = useState([]);

    const getProds = async () =>  {
        const result = await axios.get('https://www.garimpo.ga/engenharias/produtos.php?cat='+cat);
          setLista_pro(result.data);
    }

    useEffect(()=>{
        getProds();
    })


    return (
  <div className=' text-center'>
   
            {
                lista_pro === "" && <center className='my-5'> <Loader/></center> 
            }
            <OwlCarousel className='owl-theme bans' navClass={['owl-prev','owl-next']} margin={15} responsiveClass={false}  dots={false} autoWidth={true} nav={false}>
                {
                        lista_pro.map((item) => (
                            <CardP adicionar={adicionar} remover={remover} handleClick={handleClick} cart = {cart} key={item.id} item={item}/>
                            )
                        )
                    }
            </OwlCarousel>
        </div>
)
    }

export default Produtos;