import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
    const [toggle, showMenu] = useState(false);

    return (
        <header className='header'>
            <nav className="nav container">
                <Link to="/" className="nav__logo">Del Carpio</Link>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link to="/" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </Link>
                        </li>
                        {/* <li className="nav__item">
                            <Link to="/portfolio" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> Portfolio
                            </Link>
                        </li> */}
                        <li className="nav__item">
                            <Link to="/skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </Link>
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
