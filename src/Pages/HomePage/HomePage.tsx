import React from 'react'
import About from '../../Components/About/About';
import Header from '../../Components/Header/Header';
import Skills from '../../Components/Skills/Skills';
import './HomePage.scss';

const HomePage = () => {
 return(
    <div className='overall-container'>
       <Header />
       <About />
       <Skills />
    </div>
 );
}

export default HomePage;