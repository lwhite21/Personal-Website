import React from 'react'
import './Header.scss';

const Header = () => {
   const onButtonClick = (id: string) => {
      const element = document.getElementById(id);
      element?.scrollIntoView({behavior: "smooth"});
   }
 return(
    <div className='header-container'>
      <button className='header-button' >Contact</button>
      <button className='header-button' >Resume</button>
      <button className='header-button' >Career</button>
      <button className='header-button' >Projects</button>
      <button className='header-button' onClick={() => onButtonClick('skills')}>Skills</button>
    </div>
 );
}

export default Header;