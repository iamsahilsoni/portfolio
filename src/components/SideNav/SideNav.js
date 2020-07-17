import React from 'react';
import './sidenav.css';
export const SideNav =({handleClick})=>
{
    return(
        <div className="sidenav">
            <img
                src="https://i.ibb.co/j8WDzdr/pic.jpg"
                className='avatar'
                alt='photo'/>
            <h2 className="main-name">Sahil Soni</h2>
            <p className='subtitle'>“Courage Is a Love Affair with the Unknown”― Osho</p>
            <div className="section-list">
                <p className="section-list-element" onClick={()=>handleClick("about")} >About Me</p>
                <p className="section-list-element" onClick={()=>handleClick("skills")} >Skills</p>
                <p className="section-list-element" onClick={()=>handleClick("projects") }>Projects</p>
            </div>
        </div>
    ) 
} 