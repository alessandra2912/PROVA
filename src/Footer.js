import React from 'react';
import SESI from './SESI.png';
import './Footer.css';

function Footer() {
    return (
  <footer>  
    <div className='footer'>
      <img src={SESI}  alt="logo" className='footer-img'/>
      <p>&copy;2024 Todos os direitos ao povo do 3°/informática para Internet.<br/>Contato:osmelhores@sesisenai.com</p>
    </div>
  </footer>
        );
    }
    
    export default Footer;