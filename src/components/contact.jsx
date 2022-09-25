import React from "react";
import linkedinIcon from "./../assets/icons/linkedin.svg";
import emailIcon from "./../assets/icons/email.svg";
import phoneIcon from "./../assets/icons/phone.svg";
import helpers from "./../helpers";

class Contact extends React.Component {
  state = {
    phoneNumber: {
      id: helpers.uid(),
      name: "phoneNumber",
      value: "123-345-789",
      icon: phoneIcon,
    },
    email: {
      id: helpers.uid(),
      name: "email",
      value: "@gmail.com",
      icon: emailIcon,
    },

    linkedin: {
      id: helpers.uid(),
      name: "linkedin",
      value: "/in/yourUserName",
      icon: linkedinIcon,
    },
  };

  handleOnChange(e) {
    const { name, value } = e.target;

    console.log(this.state);

    this.setState({
      ...this.state,
      [name]: {
        ...this.state[name],
        value,
      },
    });
  }

  render() {
    const listInputs = Object.keys(this.state).map((i) => {
      return (
        <div className="contact-card" key={this.state[i].id}>
          <img className="contact-icon" src={this.state[i].icon} />
          <input
            className="contact-card-value editable-field"
            value={this.state[i].value}
            type="text"
            onChange={(e) => this.handleOnChange(e)}
            name={this.state[i].name}
          ></input>
        </div>
      );
    });

    return (
      <div id="contact" className="side-card">
        <h2>Contact</h2>
        {listInputs}
      </div>
    );
  }
}

export { Contact };
