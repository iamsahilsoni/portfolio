import React from 'react';
import './portfolio.css';
import { SideNav } from '../SideNav/SideNav';
import { SectionContainer } from '../SectionContainer/SectionContainer';

export const Portfolio=({selectedHeading,selectedQuote,selectedSection,handleClick})=>
{
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">  
                <SideNav
                    handleClick={handleClick}
                    />
            </div>
            <div className="main-section-container"> 
                <SectionContainer 
                    selectedHeading={selectedHeading}
                    selectedQuote={selectedQuote}
                    selectedSection={selectedSection}
                    />
            </div>
        </div>
    );
}