import React from 'react'

class ContactCard extends React.Component{

    render() {

        return (
            <div className="contact-card">
            <span className="contact-icon">{this.props.icon}</span>
            <p className="contact-card-value">{this.props.contactValue}</p>
        </div>
        
        )

        }
    }

    export  { ContactCard }