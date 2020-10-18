import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/done.css'
import '../styles/global.css'

import Img1 from '../images/done.svg';

function DonePage(){
    return (
        <div id="page-done">
            <div className="content-wrapper">
                <main>
                    <h1>Ebaaa!</h1>
                    <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. <br/>
                    Agora é só espoerar :<span>&#41;</span>
                    </p>
                    <Link to='/app' className='back-app'>
                        Voltar para o mapa
                    </Link>
                </main>

            </div>
        </div>
    );
}

export default DonePage