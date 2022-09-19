import React from 'react'
import {ContactCard} from './contact-card'
class Contact extends React.Component {

    render() {
      return (
        <div id="contact" className="side-card">
            <h2>Contact</h2>
            <ContactCard 
            icon=":)"
            contactValue="123-345-456"/>
            
            <ContactCard 
            icon=":)"
            contactValue="123-345-456"/>

            <ContactCard 
            icon=":)"
            contactValue="123-345-456"/>
        </div>
      )
    }
  }
  

  export { Contact }