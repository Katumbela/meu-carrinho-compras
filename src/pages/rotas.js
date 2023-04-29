import { Route, BrowserRouter, Routes, Form } from "react-router-dom";
import Arobot from "../produtos/detalhe_prod";
import Cart from "./carrinho";
import Home from "./home";
import Loja from "./loja";
import { useEffect, useState } from "react";
import Merchant from "./merchant";
import DescProd from "../produtos/detalhe_prod";
import Search from "./search";
import Finalizar from "./finalizar";
import Mob from "./mobilidade";
import Formulario from "./formulario";
import Login from "./login";
import Track from "./rastrear";
import Agente from "./agente/dashboard.agente";
import Parceiro from "./parceiro/dashboard.parceiro";
import Admin from "./admin";


const Rotas = ( {cart, setCart, handleClick, adicionar, pro_p_cat, remover}) => {

      // useEffect(()=> {
      //   console.log('carrinho actualizado');

      // }, [cart])


   return(
       <BrowserRouter>
            <Routes >
                <Route element = { <Mob pro_p_cat={pro_p_cat} adicionar={adicionar} remover={remover} handleClick={handleClick} cart={cart}/> }  path="/"  />
                <Route element = {<Admin pro_p_cat={pro_p_cat} adicionar={adicionar} remover={remover} handleClick={handleClick} cart={cart}/> }  path="/admin"  />
                <Route element = { <Home pro_p_cat={pro_p_cat} adicionar={adicionar} remover={remover} handleClick={handleClick} cart={cart}/> }  path="/compras"  />
                <Route element = { <DescProd pro_p_cat={pro_p_cat} adicionar={adicionar} remover={remover} cart={cart} handleClick={handleClick}  /> }  path="/produtos/store/:id" exact/>
                <Route element = { <Cart pro_p_cat={pro_p_cat} adicionar={adicionar} remover={remover} cart={cart} handleClick={handleClick} /> }  path="/cart" exact/>
                <Route element = { <Merchant pro_p_cat={pro_p_cat} cart={cart} adicionar={adicionar} handleClick={handleClick} remover={remover} /> }  path="/merchants/mercant/ref/:idloja" exact/>
                <Route element = { <Loja pro_p_cat={pro_p_cat} cart={cart} handleClick={handleClick} /> }  path="/produtos/ver_tudo/:cat" exact/>
                <Route element = { <Search pro_p_cat={pro_p_cat} cart={cart} handleClick={handleClick} /> }  path="/s/" exact/>
                <Route element = { <Formulario pro_p_cat={pro_p_cat} cart={cart} handleClick={handleClick} /> }  path="/pedido" exact/>
                <Route element = { <Agente pro_p_cat={pro_p_cat} cart={cart} handleClick={handleClick} /> }  path="/agente" exact/>
                <Route element = { <Parceiro pro_p_cat={pro_p_cat} cart={cart} handleClick={handleClick} /> }  path="/parceiro" exact/>
                <Route element = { <Login pro_p_cat={pro_p_cat} cart={cart} handleClick={handleClick} /> }  path="/login" exact/>
                <Route element = { <Track pro_p_cat={pro_p_cat} cart={cart} handleClick={handleClick} /> }  path="/track/:pedido" exact/>
                <Route element = { <Finalizar pro_p_cat={pro_p_cat} setCart={setCart} cart={cart} handleClick={handleClick} /> }  path="/finalizar" exact/>
            </Routes>
       </BrowserRouter>
   )
}

export default Rotas;