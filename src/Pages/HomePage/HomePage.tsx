import React from 'react'
import About from '../../Components/About/About';
import Header from '../../Components/Header/Header';
import './HomePage.scss';

const HomePage = () => {
 return(
    <div className='overall-container'>
       <Header />
       <About />
    </div>
 );
}

export default HomePage;