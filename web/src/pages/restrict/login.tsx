import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from '../../images/logotipo.svg'

import '../../styles/pages/login.css'

function LoginPage() {
    return (
        <div id="page-login">
            <aside>
                <form action="/dashboard" className="login-form">
                    <h1>Fazer Login</h1>
                    <div className="input-block">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <div className="checkbox">
                        <div className="checkbox-input">
                            <input type="checkbox" name="remeber" id="remember" />
                            <label htmlFor="remember">Lembrar me</label>
                        </div>
                        <Link
                            to='/forget-password' className='forget-password'>
                            Esqueci minha senha
                        </Link>
                    </div>

                    <Link to='#' className='login-button'>Entrar</Link>
                </form>
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