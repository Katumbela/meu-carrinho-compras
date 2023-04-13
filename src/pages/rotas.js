import { Route, BrowserRouter, Routes } from "react-router-dom";
import Arobot from "../produtos/detalhe_prod";
import Cart from "./carrinho";
import Home from "./home";
import Loja from "./loja";
import { useEffect, useState } from "react";
import Merchant from "./merchant";
import DescProd from "../produtos/detalhe_prod";
import Search from "./search";


const Rotas = ( {cart, handleClick, adicionar, remover}) => {

      // useEffect(()=> {
      //   console.log('carrinho actualizado');

      // }, [cart])


   return(
       <BrowserRouter>
            <Routes >
                <Route element = { <Home adicionar={adicionar} remover={remover} handleClick={handleClick} cart={cart}/> }  path="/"  />
                <Route element = { <DescProd adicionar={adicionar} remover={remover} cart={cart} handleClick={handleClick}  /> }  path="/produtos/store/:id" exact/>
                <Route element = { <Cart adicionar={adicionar} remover={remover} cart={cart} handleClick={handleClick} /> }  path="/cart" exact/>
                <Route element = { <Merchant cart={cart} adicionar={adicionar} handleClick={handleClick} remover={remover} /> }  path="/merchants/mercant/ref/loja1" exact/>
                <Route element = { <Loja cart={cart} handleClick={handleClick} /> }  path="/produtos/ver_tudo" exact/>
                <Route element = { <Search cart={cart} handleClick={handleClick} /> }  path="/s/" exact/>
            </Routes>
       </BrowserRouter>
   )
}

export default Rotas;