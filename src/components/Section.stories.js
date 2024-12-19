import React from 'react';
import Section from './Section';

export default {
    title: 'Section',
    component: Section,
};

export const AboutSection = () => (
    <Section id="about" title="About">
        <p>About Section Content</p>
    </Section>
);
