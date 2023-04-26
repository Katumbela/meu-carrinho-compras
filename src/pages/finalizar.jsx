import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';
import Lojas from '../components/lojas';
import Produtos from '../components/loja/produtos';
import { NavLink } from 'react-router-dom';
import Loader from '../components/loader';
import { useState } from 'react';

const Finalizar = ({ handleClick, cart, setCart }) => {
    let preco = 0;
    let qnt = 0;
    cart.map((item) => (preco += item.preco * item.qty));
    cart.map((item) => (qnt += item.qty));

    const [loading, setLoading] = useState(false);


    document.title = 'Finalizar compra de ' + qnt + ' produtos | Meu Carrinho Compras';
    return (
        <div className="w-100">

            < Header cart={cart} />
            <div className="container">

                <br />
                <h4>Finalizar compra</h4>
                <hr />
                <br />
                {qnt == 0 &&
                    <center>
                        <span className="text-secondary">Seu carrinho está Vazio, faca compras</span>
                    </center>}


                {
                    loading == true ? <Loader /> : ""
                }

                {
                    qnt != 0 &&
                    <div>
                        <b className="text-danger">Confirme sua lista de produtos:</b>
                        <ul>
                            {
                                cart.map((item) => (
                                    <li className='text-secondary fs-56' key={item.id}>( {item.qty} ) {item.tit}</li>
                                ))

                            }
                        </ul>
                        <br /><br />
                        <button onClick={() => { setLoading(true) }} className="btn btn-carrinho">Confirmar</button>
                    </div>
                }
                
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            < Footer />
        </div>
    );
}

export default Finalizar;
