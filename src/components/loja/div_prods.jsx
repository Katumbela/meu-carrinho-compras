import produtos from '../../pages/lista_prods'; 
import'../../css/div_loja.css'
import Card from './card';

const DivLoja = (props) => {

  const {handleClick, cart} = props;

    return (
      <>
  <div className=''>
   
   


        <div className="row gap-0 ps-1">
          {
            produtos.map((item) => (

                  <Card key={item.id} handleClick={handleClick} item={item}/>
             
                )
            )
          };
        </div>

  </div></>
)
    }

export default DivLoja;