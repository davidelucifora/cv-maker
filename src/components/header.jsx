import React from 'react'

class Header extends React.Component {

  state = {
    fullName : {
      value: 'John Smith',
      isEditing: false
    },
    jobTitle : {
      value: 'Front End Developer',
      isEditing: false
    }
  }

  handleChange(e) {

    const {name, value} = e.target

    this.setState({
      ...this.state,
      [name] : {
        value: value,
        isEditing: true
      }

    })


  }

    render() {
      return (
        <div id="header">
            <img src="https://xsgames.co/randomusers/avatar.php?g=male" 
            alt={this.state.fullName.value} 
            className="profile-pic" 
            width="150px" heigh="150px"/>
            
            <div id="name-title-wrapper">
                <input 
                className="fullname-input editable-field"
                type="text" 
                name="fullName"
                onChange={e => this.handleChange(e)}
                aria-label="Name"
                value={this.state.fullName.value}>
                </input>
                <input
                className="editable-field header-job-title"
                value={this.state.jobTitle.value}
                name="jobTitle"
                onChange={e => this.handleChange(e)}
                aria-label="Job Title"                
                >
                  
                </input>
            </div>
        </div>
      )
    }
  }
  

  export { Header }