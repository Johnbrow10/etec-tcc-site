import React from 'react';
import { FiArrowRight } from 'react-icons/fi';


import './styles/global.css';
import './styles/pages/home.css';

import LogoImg from './images/logo.png';

function App() {
  return (
    <div id="page-home">

      <div className="content-wrapper">
        <img src={LogoImg} alt="logo" />
        <h1 className="logo">Iluguel</h1>

        <main>
            <h1>Encontre imoveis para alugar </h1>
            <p>Sendo as mais confortaveis proximo a você </p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size="26" color="(0. 0. 0. 0. 6)"/>
        </a>
      </div>
    </div>
  );
}

export default App;
