import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Img1 from '../../images/logotipo.svg'

import '../../styles/pages/forgetpassword.css'

function LoginPage() {
    return (
        <div id="page-forget">
            <aside>
                <form action="/dashboard" className="forget-form">
                    <h1>Esqueci a senha</h1>
                    <p>Sua redefinição de senha será enviada
                        para o e-mail cadastrado.
                    </p>
                    <div className="input-block">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" />
                    </div>
      

                    <Link to='#' className='forget-button'>Enviar</Link>
                </form>

                    <Link to='/app' className='back-app'>
                        <FiArrowLeft size={24} color="#15C3D6" />
                    </Link>
            </aside>

            <main>
                <div className="logo">
                    <img src={Img1} alt="happy" />

                    <div className="location">
                        <strong>Recife</strong>
                        <span>Pernambuco</span>
                    </div>
                </div>


            </main>


        </div>
    )
}

export default LoginPage;