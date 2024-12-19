import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SocialIcons from './SocialIcons';

function Footer() {
    return (
        <footer className="footer">
            <p>© 2024 Manisha Ranga</p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/manisharanga/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/rangamanisha" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </footer>
    );
}

export default Footer;