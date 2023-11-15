import React from 'react';
import "./about.css"
// import AboutImg from "../../assets/headshot.jpeg";
// import Resume from "../../assets/victor-hugo-dc.pdf";
// import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about"> 
        <h2 className="section__title">Portfolio</h2> 
        <span className="section__subtitle">My work</span>

        <div className="about__container container grid">
            {/* <img src={AboutImg} alt="" className="about__img" /> */}
            <div className="about__data">
                {/* <Info/> */}
                {/* <p className="about__description">
                    I'm a Computer Science student previously at Yale University. 
                    I previously interned as an Azure Core Storage intern for Microsoft and conducted research at Yale's Interactive Machines Group (IMG). 
                    I'm interested in human-computer interaction and machine learning.
                    Check out my resume <a download="VictorDelCarpio.pdf" href={Resume}>here</a>.
                </p> */}
            </div>
            <div class="skills__container container grid">
                <div class="skills__content">
                    <h3 class="skills__title">FacePy Bird</h3>
                    <div class="skills__box">
                        <div class="skills__group">
                            <div class="skills__data">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skills__content">
                    <h3 class="skills__title">Frontend Developer</h3>
                    <div class="skills__box">
                        <div class="skills__group">
                            <div class="skills__data">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skills__content">
                    <h3 class="skills__title">Frontend Developer</h3>
                    <div class="skills__box">
                        <div class="skills__group">
                            <div class="skills__data">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;