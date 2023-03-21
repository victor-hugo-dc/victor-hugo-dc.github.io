import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact</h2> 
            <span className="section__subtitle">Get In Touch</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to Me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">
                                Email
                            </h3>
                            <span className="contact__card-data">
                                user@gmail.com
                            </span>
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-phone contact__card-icon"></i>

                            <h3 className="contact__card-title">
                                Phone
                            </h3>
                            <span className="contact__card-data">
                                (703) 400 - 2685
                            </span>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-telegram contact__card-icon"></i>

                            <h3 className="contact__card-title">
                                Telegram
                            </h3>
                            <span className="contact__card-data">
                                victordelcarpio
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact