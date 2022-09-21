import React from 'react'

class ExperienceCard extends React.Component{
    render() {
        return (
            <div className="experience-card">
                <h4>{this.props.jobTitle}</h4>
                <span className="company-name">{this.props.companyName}</span>
                <span className="years-in-company">{this.props.yearsInCompany}</span>
                <p>{this.props.experienceDescription}</p>
            </div>
        )
    }
}

export {ExperienceCard}