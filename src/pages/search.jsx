import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Produtos from '../components/loja/produtos';
import cat1 from '../imgs/im3.png';
import cat2 from '../imgs/frutas-vermelhas_1214788639.png';
import cat3 from '../imgs/p2.png';
import cat4 from '../imgs/p4.png';
import cat5 from '../imgs/im16.png';
import axios from 'axios';
import Card from '../components/loja/card';
import Loader from '../components/loader';

const Search = ({cart, handleClick, adicionar, remover}) => {

  let preco = 0 ;
  let qnt = 0 ;
  cart.map((item) => (preco +=  item.preco * item.qty));
  cart.map((item) => (qnt +=  item.qty ));

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get("https://www.garimpo.ga/engenharias/all_prods.php")
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleFilter = (event) => {
    const searchValue = event.target.value.toString().toLowerCase();
    const filteredList = products.filter(product =>
      product.tit.toString().toLowerCase().includes(searchValue)
    );
    setFilteredProducts(filteredList);
  };



  // const precos = () => {
  //   let ans = 0;
  //   cart.map((item) => (ans +=  item[0].preco));
  //   setPreco(ans);
  // }

  // useEffect(() => {
  //   precos();
    return (
      <div className='bg-white carrinho'>
      <div className="container">
        <br />
        <NavLink className={'navlink'} to={'/'} >
           <i className="bi bi-arrow-left-short"></i> Voltar
        </NavLink>
        <div className="d-flex justify-content-between">

        <h2>Pesquise um produto</h2>
       
        </div>
        <div className="d-flex border rounded-2 py-1 px-md-3 px-3">
            <i className="bi text-secondary bi-search my-auto"></i>
            <input type="text" placeholder='Pesquise por... '  onChange={handleFilter}  style={{border: 'none', outline: 'none'}}  className="px-1 px-md-3 s my-auto" />

        </div>
        <br />
{/* 
<div className="d-flex gap-3 flex-wrap cats">
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat1} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat2} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat3} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat4} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat5} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat3} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat5} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat5} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat5} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
  <div className="bg-soft p-2 m-1 rounded-2 cursor-pointer">
    <img src={cat5} style={{width:'5em'}} alt="aaa" />
    <br />
    <b className='f-12 text-danger'>Batatas fritas</b>
  </div>
</div> */}


          <center>
            {
              filteredProducts=="" && 
              <div>

              <span className="text-secondary f-10">Não foi encontrado nenhum resultado ou reformule sua pesquisa!</span>
              </div>
            }
          </center>


          <div className="row">
        {filteredProducts.map(product => (
                <Card key={product.id} handleClick={handleClick} item={product}/>
         
        ))}

</div>
          <br />




<br /><br />
<br /><br />
<br /><br />
{/* 
          <div className="  ">

              <div className="bg-danger justify-content-between d-flex container my-cartt py-2 rounded-2">
                <div className="d-flex flex-column">
                  <span className="f-12 text-white">{qnt} Itens</span>
                  <span className="text-white fw-light f-16">
                    Total: {preco + preco*0.5 + preco*0.14} Kzs
                  </span>
                </div>
                <div className='my-auto'>
                  <b className="fw-light text-white my-auto f-16">Finalizar <i className="bi bi-arrow-right-short "></i></b>
                </div>
              </div>
          </div> */}

      </div>
      

      </div>
    );
  };
export default Search;
