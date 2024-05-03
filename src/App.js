import React from 'react'; 
import Navbar from './NavBar'; 
import Home from './Home';
import Footer from './Footer';
import Form from './Form';
import Quemsomos from './Quemsomos';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function  App() { 
 return ( 
 <div className="App"> 

 <Navbar/>  
 <BrowserRouter> 
 <Routes> 
 <Route path='/' element={<Home />} /> 
 <Route path='/contato' element={<Form />} />
 <Route path='/quem' element={<Quemsomos />} />
 </Routes> 
 </BrowserRouter> 
 <Footer/> 

 
 </div> );} 

export default App; 