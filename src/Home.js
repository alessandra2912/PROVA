import React from 'react';
import './Home.css';
import FOTO3 from './FOTO3.jpg';
import Galera from './Galera.jpg';
import FOTO7 from './FOTO7.jpg';
import FOTO6 from './FOTO6.jpg';
import FOTO4 from './FOTO4.jpg';
import FOTO5 from './FOTO5.jpg';

function Home() {
    return (
 <div className='main-home'>

    <div className='main-title'>
       <h1>Bem-Vindo à Página Inicial da nossa AV2</h1>
       <p>Conheça nossos melhores Cosplays do SESI/SENAI.</p>
    </div>
   <div className='main-content'>
     <div className='main-content1'>
        <img src={FOTO3}  alt="TURMA DA MONICA" />
         <h3>Povo da Turma da Mônica</h3>        
      </div>
        <div className='main-content2'>
        <img src={FOTO6}  alt="Leandro" />
        <h3>Foveiras e o Teacher TOP!!!</h3>        
        </div>
        <div className='main-content3'>
        <img src={FOTO7}  alt="TIM" />
        <h3>As Operadoras TIM e Claro + Flanelinha</h3>        
        </div>
        <div className='main-content4'>
        <img src={FOTO5}  alt="Tigrinho" />
        <h3>Tigrinho Man</h3>        
        </div>
        <div className='main-content5'>
       <img src={FOTO4}  alt="Dolinho" />
       <h3>Dollynho e não sei as outras duas</h3>
        </div>
        <div className='main-content6'>
       <img src={Galera}  alt="Galera" />
       <h3>A Turma Mais F$#% do SESI/SENAI</h3>
        </div>
   </div>

 </div>
        );
  }
  
  export default Home;
