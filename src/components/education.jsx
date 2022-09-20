import React from 'react'
import {EducationCard} from './education-card'

class Education extends React.Component {
    render() {
      return (
        <div className="side-card">
          <h2>Education</h2>
          <EducationCard 
          degree="Foreign Languages"
          subject="English, Russian, Spanish "
          uni="University of Catania"
          years="2008 - 2014"/>
        </div>
      )
    }
  }
  

  export { Education }