import React from 'react';
import './section-container.css';
import { About } from '../About/About';
import {Skills} from '../Skills/Skills'
import {Projects} from '../Projects/Projects'
export const SectionContainer =({selectedHeading,selectedQuote,selectedSection})=>
{
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHeading}</h1>
                <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className>
                {
                    {
                        "about":<About/>,
                        "skills":<Skills/>,
                        "projects":<Projects/>
                    }[selectedSection]
                }
            </div>
        </div>
    )
}