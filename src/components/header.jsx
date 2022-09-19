import React from 'react'

class Header extends React.Component {

    render() {
      return (
        <div id="header">
            <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt ="Name Surname" className="profile-pic" width="150px" heigh="150px"/>
            <div id="name-title-wrapper">
                <h1>{this.props.fullName}</h1>
                <h3>{this.props.jobTitle}</h3>
            </div>
        </div>
      )
    }
  }
  

  export { Header }