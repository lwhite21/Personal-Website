import React from 'react'
import './Header.scss';

const Header = () => {
 return(
    <div className='header-container'>
     <button className='header-button' >About</button>
     <button className='header-button' >Skills</button>
     <button className='header-button' >Projects</button>
     <button className='header-button' >Career</button>
     <button className='header-button' >Resume</button>
     <button className='header-button' >Contact</button>
    </div>
 );
}

export default Header;