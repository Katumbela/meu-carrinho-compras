import produtos from '../../pages/lista_prods'; 
import'../../css/div_loja.css'
import Card from './card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../loader';

const DivLoja = (props) => {

  const {handleClick, cat, cart} = props;
  const [lista_pro, setLista_pro] = useState([]);

  const getProds = async () =>  {
      const result = await axios.get('https://www.garimpo.ga/engenharias/produtos.php?cat='+cat);
      
        setLista_pro(result.data);
  }

  useEffect(()=>{
      getProds();
  }, [])


    return (
      <>
  <div className=''>
   
   
            {
                lista_pro == "" && <center className='my-5'> <Loader/></center> 
            }
        <div className="row gap-0 ps-1">
          {
            lista_pro.map((item) => (

                  <Card key={item.id} handleClick={handleClick} item={item}/>
             
                )
            )
          };
        </div>

  </div></>
)
    }

export default DivLoja;