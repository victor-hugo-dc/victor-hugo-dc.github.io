import React from 'react'

export const QualificationItem = ({title, subtitle, timeline}) => {
    return (
        <div>
            <h3 className="qualification__title">{title}</h3>
            <span className="qualifaction__subtitle">{subtitle}</span>
            <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> {timeline}
            </div>
        </div>
    )
}
