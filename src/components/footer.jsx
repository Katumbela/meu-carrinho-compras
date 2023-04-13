import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/footer.css'
import logo from '../imgs/logo.png'

function Footer() {
    return (
        <div className='bg-carrinho'>
        <div className='container-lg'>
        <div className=" mt-4 bg-carrinho footer">
            <div className=" row text-white">
                <div className="col-12 my-2 my-md-1 col-sm-4 col-md-4 text-start">
                    <h5 className="text-danger">Contacte nos</h5>
                    <ul>
                        <li>Endereço: Luanda - Angola</li>
                        <li>Whatsapp: +244 938 811 000</li>
                        <li>E-mail: geral@meucarrinhocompras.com</li>
                    </ul>
                </div>
                <div className="col-12 my-2 my-md-1 col-sm-4 col-md-4 text-start">
                    <h5 className="text-danger">Empresa</h5>
                    <ul>
                        <li><NavLink className="footerlink" to="/sobre">Sobre Nós</NavLink></li>
                        <li><NavLink className="footerlink" to="/carreira">Carreira</NavLink></li>
                        <li><NavLink className="footerlink" to="/blog">Blog</NavLink></li>
                    </ul> 
                </div>
                <div className="col-12 my-2 my-md-1 col-sm-4 col-md-4 text-start">
                    <h5 className="text-danger">Ajuda & Suporte</h5>
                    <ul>
                        <li><NavLink className="footerlink" to="/sobre">Termos e condicoes </NavLink></li>
                        <li><NavLink className="footerlink" to="/carreira">Politicas de Privacidade</NavLink></li>
                        <li><NavLink className="footerlink" to="/blog">Perguntas Frequentes</NavLink></li>
                    </ul> 
                </div>
            </div>
        </div>
        <center>
            <p className='footerlink container f-12'>
            Termos de privacidade | Termos de serviço | Anúncios com base em interesses | Direitos de privacidade da CA
|Não venda ou compartilhe minhas informações pessoais
            </p>
        </center>
        </div>
            <div className="copyright p-2 row bg-carrinho">
                <div className="d1 col-6 col-md-6  text-start">
                   <img src={logo} alt="logo" style={{height: '2rem'}} />
                </div>
                <div className="d1  col-6 col-md-6  text-end">
                  <div className="d-flex " style={{float: 'right'}}>
                  <b className='text-dark my-auto'>Siga-nos</b> <div>
                   <div className="d-flex gap-2 ms-2"> <div className='rounded-circle' style={{height:'2em', display: 'grid', placeContent:'center', color: 'white', width: '2em', background:'red'}}>
                        <i className="bi bi-linkedin"></i>
                    </div>
                    <div className='rounded-circle' style={{height:'2em', display: 'grid', placeContent:'center', color: 'white', width: '2em', background:'red'}}>
                        <i className="bi bi-twitter"></i>
                    </div>
                    <div className='rounded-circle' style={{height:'2em', display: 'grid', placeContent:'center', color: 'white', width: '2em', background:'red'}}>
                        <i className="bi bi-facebook"></i>
                    </div>
                    <div className='rounded-circle' style={{height:'2em', display: 'grid', placeContent:'center', color: 'white', width: '2em', background:'red'}}>
                        <i className="bi bi-instagram"></i>
                    </div></div>
                   </div>
                  </div>
                </div> 
            </div>
            <center className="bg-carrinho pb-2">
                <span className="f-10">Powered By Meu Carrinho - All Rights Reserved</span>
            </center>
        </div>
    )
}

export default Footer;
