import React from 'react'
import {ExperienceCard} from './experience-card'


class Experience extends React.Component {
    render() {
      return (
        <div className="main-content-card">
        <h1 className="main-content-heading">Experience</h1>
        <ExperienceCard 
        jobTitle="Account Executive"
        companyName="Myagi"
        yearsInCompany="2022 - Present"
        experienceDescription="Lorem Ipsum Dolor SIt Met yaddayadadfadfase"/>
        </div>
      )
    }
  }


  export { Experience }