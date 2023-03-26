import React, { useState } from 'react';
import "./qualification.css"
import { QualificationItem } from './QualificationItem';

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
                        <QualificationItem title="Advanced Diploma" subtitle="Centreville High School" timeline="2015 - 2019"/>
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
                        <QualificationItem title="MOSTEC OEOP Program" subtitle="Massachussets Institute of Technology" timeline="2018-2019"/>
                    </div>

                    <div className="qualification__data">
                        <QualificationItem title="Bachelors in Computer Science" subtitle="Yale University" timeline="2019 - Present"/>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <QualificationItem title="Student Technician" subtitle="Student Technology Collaborative (STC)" timeline="2019 - 2023"/>

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
                        
                        <QualificationItem title="Undergraduate Research Assistant" subtitle="Interactive Machines Group @ Yale" timeline="June - Dec, 2021"/>
                    </div>

                    <div className="qualification__data">
                        <QualificationItem title="Azure Core SWE Intern" subtitle="Microsoft" timeline="May - Aug, 2022"/>

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
                        <QualificationItem title="Queue Coordinator" subtitle="Student Technology Colaborative (STC)" timeline="2022 - 2023"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Qualification;