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
                    <p>Escolha uma nova senha para você acessar
                        o dashboard do Happy.
                    </p>
                    <div className="input-block">
                        <label htmlFor="password">Nova senha</label>
                        <input type="password" name="password" id="passwrod" />
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="password-repeat">Repetir senha</label>
                        <input type="password" name="password-repeat" id="password-repeat" />
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