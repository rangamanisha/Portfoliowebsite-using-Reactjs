import React from 'react';
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => (
    <header className="header">
        <h1>Manisha Ranga</h1>
        <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a> 

            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
        </nav>
        

    </header>
);

export default Header;

// import React from 'react';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import './App.css';

// function Header() {
//     return (
//         <header className="header">
//             <h1>Manisha Ranga</h1>
//             <nav className="nav">
//                 <a href="#about">About</a>
//                 <a href="#experience">Experience</a>
//                 <a href="#projects">Projects</a>
//                 <a href="#contact">Contact</a>
//             </nav>
//             <div className="social-icons">
//                 <a href="https://www.linkedin.com/in/manisharanga/" target="_blank" rel="noopener noreferrer">
//                     <FaLinkedin />
//                 </a>
//                 <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
//                     <FaGithub />
//                 </a>
//             </div>
//         </header>
//     );
// }

// export default Header;
