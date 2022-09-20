import React from 'react'
import {ContactCard} from './contact-card'
import linkedinIcon from './../assets/icons/linkedin.svg'
import mailIcon from './../assets/icons/email.svg'
import phoneIcon from './../assets/icons/phone.svg'

class Contact extends React.Component {

    render() {
      return (
        <div id="contact" className="side-card">
            <h2>Contact</h2>
            <ContactCard 
            icon={phoneIcon}
            contactValue="123-345-456"/>
            
            <ContactCard 
            icon={mailIcon}
            contactValue="davidelucifora@gmail.com"/>

            <ContactCard 
            icon={linkedinIcon}
            contactValue="/in/davidelucifora"/>
        </div>
      )
    }
  }
  

  export { Contact }