import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/login.css';
import logo from '../imgs/logo.png'
import logo2 from '../imgs/icone.png'

const Login = () => {

   return(
    <div className="c body">
        <div className="row w-100">
            <div className="col-12 autoo col-md-6 col-xl-6 col-xxl-6 luanda">
                    <div className="">
                    <img src={logo} style={{height: '3em'}} alt="Logo Arotec" /> <br />
                    <span className="text-white">Angola Robotica e Tecnologia</span>
                    </div>
            </div>
            <div className="col-12 col-md-6 autoo col-xl-6 col-xxl-6 ">
                <div className="container my-auto form">
                    <center> <img src={logo2} style={{height: '1.5em'}} alt="Logo Arotec" /></center>
                    <div>
                        <label htmlFor="" className='text-secondary f-12'>E-mail</label>
                        <input type="email" placeholder='Seu email' name="" id="" className="form-control" />
                        
                    </div>
                    <div className='mt-3'>

                    <label htmlFor="" className='text-secondary f-12'>Palavra passe</label>
                        <input type="email" placeholder='Palavra passe' name="" id="" className="form-control" />
                    </div>
                    <div className="mt-4">
                        <button className="btn w-100 btn-primary">
                            Entrar
                        </button>
                        <br />
                        <center className='mt-2'><span className="f-12">Não possui uma conta ? </span><NavLink className="mt-2 f-12" to="/criar_conta">Crie uma conta</NavLink></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}

export default Login;