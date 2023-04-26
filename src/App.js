import './App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Rotas from './pages/rotas';
import React, { useState } from 'react';

const App = () => {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
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



  return (
       <Rotas adicionar={adicionar} setCart={setCart} remover = {remover}  handleClick={handleClick} cart={cart} />
     
  );
}

export default App;
