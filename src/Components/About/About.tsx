import React from 'react'
import './About.scss';
import ProfilePicture from '../../Images/ProfilePicture.jpg';

const About = () => {
 return(
    <div className='about-container'>
      <div className='about-text'>
       <div className='about-title'>Logan White</div>
       <div className='about-description'>Senior at The University of Nebraska-Lincoln majoring in Computer science. Interested in front and back end development.</div>
      </div>
       <img className='about-image' src={ProfilePicture}/>
    </div>
 );
}

export default About;