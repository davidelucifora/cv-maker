import React from 'react'

class ContactCard extends React.Component{

    render() {

        return (
            <div className="contact-card">
            <img className="contact-icon" src={this.props.icon} width="24" height="24" />
            <p className="contact-card-value">{this.props.contactValue}</p>
        </div>
        
        )

        }
    }

    export  { ContactCard }