import React, { useState } from 'react';
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    <section className="qualification section">
        <h2 className="section__title">
            Qualification
        </h2>
        <span className="section__subtitle">
            My Journey
        </span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 
                    ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"
                    }
                    onClick = {() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
                </div>
                <div className={
                    toggleState === 2 
                    ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"
                    }
                    onClick = {() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Advanced Diploma</h3>
                            <span className="qualifaction__subtitle">Centreville High School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2015 - 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">MOSTEC OEOP Program</h3>
                            <span className="qualifaction__subtitle">Massachussets Institute of Technology</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018-2019
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelors in Computer Science</h3>
                            <span className="qualifaction__subtitle">Yale University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Student Technician</h3>
                            <span className="qualifaction__subtitle">Student Technology Collaborative</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - Present
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Student Technician</h3>
                            <span className="qualifaction__subtitle">Student Technology Collaborative (STC)</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Undergraduate Research Assistant</h3>
                            <span className="qualifaction__subtitle">Efficient Computing Lab @ Yale</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020
                            </div>
                        </div>
                    </div> */}

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Undergraduate Research Assistant</h3>
                            <span className="qualifaction__subtitle">Interactive Machines Group @ Yale</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> June - Dec, 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Queue Coordinator</h3>
                            <span className="qualifaction__subtitle">Student Technology Colaborative (STC)</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Student Technician</h3>
                            <span className="qualifaction__subtitle">Student Technology Collaborative</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - Present
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Qualification;