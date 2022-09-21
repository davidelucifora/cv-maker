import React from 'react'
import { useState } from 'react'
import { render } from 'react-dom'
import './App.css'
import { Contact } from './components/contact'
import { Education } from './components/education'
import { Experience } from './components/experience'
import { Header } from './components/header'
import { Languages } from './components/languages'
import { Summary } from './components/summary'

class App extends React.Component {
  render() {
    return (
      <div id="App" className="App">
        <Header 
        fullName = "Davide Lucifora"
        jobTitle = "SaaS Account Executive"/>
        <div className="sidebar">
          <Contact />
          <Education />
          <Languages />
        </div>
        <div className="main-section">
          <Summary 
          summary="Lorem Ipsum chupami la cabra fava fava fava lettaLorem Ipsum chupami la cabra fava fava fava lettaLorem Ipsum chupami la cabra fava fava fava lettaLorem Ipsum chupami la cabra fava fava fava letta"/>
          <Experience />
        </div>
        <div className="controls">
          <button className="submit-cv-btn">Submit CV</button>
        </div>
      </div>
    )
  }
}

export default App
