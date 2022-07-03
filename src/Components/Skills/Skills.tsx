import './Skills.scss';
import CSharp from '../../Images/Logos/CSharpLogo.png';
import Css from '../../Images/Logos/CSSLogo.png';
import Html from '../../Images/Logos/HTMLLogo.png';
import Java from '../../Images/Logos/JavaLogo.png';
import JavaScript from '../../Images/Logos/JavaScriptLogo.png';
import Python from '../../Images/Logos/PythonLogo.png';
import React from '../../Images/Logos/ReactLogo.png';
import Sql from '../../Images/Logos/SQLLogo.png';
import TypeScript from '../../Images/Logos/TypeScriptLogo.png';
import { Tooltip } from 'antd';

interface ILogo {
    src: string;
    description: string;
}

const Skills = () => {
    const logos: ILogo[] = [
        {src: CSharp, description: 'I have used C# a lot for developing video games in unity as well as for the backend in two of my internships.'},
        {src: Html, description: 'Html is a language that I have used a lot as I enjoy front end development.'},
        {src: Css, description: 'CSS is something that I use all the time when developing web applications.'},
        {src: Java, description: 'Java is the first programming language that I have ever learned. I used it in a highschool class, as well as a class in college.'},
        {src: JavaScript, description: 'JavaScript is one of my favorite languages. I have been using it for a while now and is probably my strongest lanuage.'},
        {src: TypeScript, description: 'TypeScript was introduced to me during one of my internships. I think that it is just a better version of Javascript'},
        {src: Python, description: 'Python is a language that I learned during one of my classes in college. It has been a while since I have used it, but I am familiar with it.'},
        {src: React, description: 'I really enjoy react. It is such a powerful tool for front end development. I have been using it for a while now.'},
        {src: Sql, description: 'I have used SQL for quite some time now as it is very trivial for backend development. I used it for a class in college, as well as during my internships.'},
    ];
 return(
    <div className='skills-container' id='skills'>
        <div className='skills-title'>Skills</div>
        <div className='skill-logos'>
            {logos.map((logo: any) => (
                <Tooltip title={logo.description} mouseEnterDelay={.3} mouseLeaveDelay={0}>
                    <img className="logo-image" src={logo.src} />
                </Tooltip>
            ))}
        </div>
    </div>
 );
}

export default Skills;