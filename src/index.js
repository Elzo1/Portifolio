import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Navbar from './componentes/Navbar/navbar';
import Home from './componentes/Home/home'
import Sociais from './componentes/Links/sociais'
import Sobre from './componentes/Sobre/sobre'
import Projetos from './componentes/Projetos/projetos'
import Experiencia from './componentes/Experiencias/experiencias'
import Contatos from './componentes/Contatos/contatos'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home/>
    <Sociais/>
    <Sobre/>
    <Projetos/>
    <Experiencia/>
    <Contatos/>
  </React.StrictMode>
);
