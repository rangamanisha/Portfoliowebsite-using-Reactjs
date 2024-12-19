import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './SocialIcons.css'; // Optional if using modular styles

const SocialIcons = () => (
  <div className="social-icons">
    <a href="https://www.linkedin.com/in/manisharanga/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
  </div>
);

export default SocialIcons;
