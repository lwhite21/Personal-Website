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
        {src: CSharp, description: 'C#'},
        {src: Html, description: 'Html'},
        {src: Css, description: 'CSS'},
        {src: Java, description: 'Java'},
        {src: JavaScript, description: 'JavaScript'},
        {src: Python, description: 'Python'},
        {src: React, description: 'React'},
        {src: Sql, description: 'SQL'},
        {src: TypeScript, description: 'TypeScript'},
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