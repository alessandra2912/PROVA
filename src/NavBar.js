import React from 'react';
import './Navbar.css';
import SENAI from './SENAI.png';

function Navbar() {
    return (
        <nav>
            <div className='img-nav'>            
              <img src={SENAI}  alt="logo" className='nav-img'/><br/>
            </div>
            <div className='main-nav'>
             <a href="/">Home</a>
             <a href="/contato">Contato</a>
             <a href="/quem">Quem Somos</a>
            </div>
        </nav>
    );
  }
  
  export default Navbar;
