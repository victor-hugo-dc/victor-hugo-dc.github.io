import React, { useState } from 'react';
import "./header.css"

const Header = () => {
    const [toggle, showMenu] = useState(false);
    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Del Carpio</a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                        <i className="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>
                    </ul>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;