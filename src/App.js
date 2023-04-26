import axios, { Axios } from 'axios';
import './App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Rotas from './pages/rotas';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    const existe = cart.find((x) => x.id === item.id);

    if(existe ){
      setCart(
        cart.map((x)=> x.id === item.id ? {...existe, qty: existe.qty + 1} : x)
      )
      toast.success('Adicionado mais 1 deste produto');
    }
    else {

      setCart([...cart, {...item, qty: 1}]);
      console.log(cart);
      toast.success('Adicionado ao carrinho')
    }
  }

  const remover = (item) => {
    const existe = cart.find((x) => x.id === item.id);

    if(existe.qty === 1){
      setCart(
        cart.filter((x)=> x.id !== item.id)
      )
    }
    else {
      setCart(
        cart.map((x)=> x.id === item.id ? {...existe, qty: existe.qty - 1} : x)
       )
    }
  }

  const adicionar = (item) => {
    const existe = cart.find((x) => x.id === item.id);

    if(existe ){
     setCart(
      cart.map((x)=> x.id === item.id ? {...existe, qty: existe.qty + 1} : x)
     )
    }
    else {

      setCart([...cart, {...item, qty: 1}]);
      console.log(cart);
    }
  }

const pro_p_cat = () => {
  axios.get('https://www.garimpo.ga/engenharias/produtos.php')
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
   return console.log('deu errado');
  });

}

  return (
       <Rotas pro_p_cat={pro_p_cat} adicionar={adicionar} setCart={setCart} remover = {remover}  handleClick={handleClick} cart={cart} />
     
  );
}

export default App;
