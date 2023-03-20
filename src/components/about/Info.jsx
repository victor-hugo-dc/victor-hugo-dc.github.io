import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-timer about__icon' ></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">4 Years Working</span>
        </div>
        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">10+ Completed</span>
        </div>
        <div className="about__box">
            <i class='bx bx-terminal about__icon'></i>
            <h3 className="about__title">Skills</h3>
            <span className="about__subtitle">8 Languages</span>
        </div>
    </div>
  )
}

export default Info