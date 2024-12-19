import React from 'react';
import './Section.css';

const Section = ({ id, title, children }) => (
    <section id={id} className="section">
        <h2>{title}</h2>
        {children}
    </section>
);

export default Section;