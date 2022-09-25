import React from "react";
import cameraIcon from "./../assets//icons/camera.svg";

class Header extends React.Component {
  state = {
    fullName: {
      value: "John Smith",
      isEditing: false,
    },
    jobTitle: {
      value: "Front End Developer",
      isEditing: false,
    },
    profilePic: {
      url: "https://xsgames.co/randomusers/avatar.php?g=male",
      isEditing: false,
    },
  };

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: {
        value: value,
        isEditing: true,
      },
    });
  }

  handleUploadImg() {
    this.setState({
      ...this.state,
      ...this.state.profilePic,
      isEditing: true,
    });
  }

  render() {
    return (
      <div id="header">
        <div className="profile-pic">
          <img
            src={this.state.profilePic.url}
            onClick={(e) => this.handleUploadImg(e)}
            alt={this.state.fullName.value}
            width="150px"
            heigh="150px"
          />
          <div className="profile-pic-overlay">
            <img src={cameraIcon} />
          </div>
        </div>
        <div id="name-title-wrapper">
          <input
            className="fullname-input editable-field"
            type="text"
            name="fullName"
            onChange={(e) => this.handleChange(e)}
            aria-label="Name"
            value={this.state.fullName.value}
          ></input>
          <input
            className="editable-field header-job-title"
            value={this.state.jobTitle.value}
            name="jobTitle"
            onChange={(e) => this.handleChange(e)}
            aria-label="Job Title"
          ></input>
        </div>
      </div>
    );
  }
}

export { Header };
