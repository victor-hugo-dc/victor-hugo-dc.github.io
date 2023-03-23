import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">
                    Del Carpio
                </h1>
                <div className="footer__social">
                    <a href="https://www.instagram.com/victordelcarpio/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://github.com/victor-hugo-dc" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/victor-hugo-dc/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; Victor Del Carpio. All rights reserved
                </span>
            </div>
        </footer>
    );
}

export default Footer;