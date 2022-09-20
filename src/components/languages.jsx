import React from 'react'
import {LanguageCard} from './language-card'

class Languages extends React.Component {
    render() {
      return (
        <div className="side-card">
          <h2>Languages</h2>
          <LanguageCard 
          language="English"
          languageLevel="Fluent"/>
        </div>
      )
    }
  }
  

  export { Languages }