import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars.githubusercontent.com/u/59834708?s=400&u=b2ec47cfef4cf6defbde711acd16d3273a272fa4&v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">David Orji</h2>
            <p className="subtitle">"A Front-end Developer"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};