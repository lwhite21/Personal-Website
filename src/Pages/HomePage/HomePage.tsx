import React from 'react'
import About from '../../Components/About/About';
import Header from '../../Components/Header/Header';
import Skills from '../../Components/Skills/Skills';
import './HomePage.scss';
import { Career } from '../../Components/Career/Career';

const HomePage = () => {
 return(
    <div className='overall-container'>
       <Header />
       <About />
       <Career />
       <Skills />
    </div>
 );
}

export default HomePage;