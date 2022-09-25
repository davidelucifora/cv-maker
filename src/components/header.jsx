import React from "react";
import cameraIcon from "./../assets//icons/camera.svg";

class Header extends React.Component {
  state = {
    fullName: {
      value: "John Smith",
    },
    jobTitle: {
      value: "Front End Developer",
    },
    profilePic: {
      url: "https://xsgames.co/randomusers/avatar.php?g=male",
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

  handleUploadImg(e) {
    const file = e.target.files;

    if (file) {
      console.log(file);
      this.setState({
        ...this.state,
        profilePic: {
          url: URL.createObjectURL(file[0]),
        },
      });
    }
  }

  render() {
    return (
      <div id="header">
        <div className="profile-pic">
          <img
            src={this.state.profilePic.url}
            alt={this.state.fullName.value}
            width="150px"
            heigh="150px"
          />
          <div
            className="profile-pic-overlay"
            onClick={() => document.getElementById("uploadImg").click()}
          >
            <img src={cameraIcon} className="cameraIcon" />
          </div>
          <input
            type="file"
            className="img-input"
            id="uploadImg"
            onChange={(e) => this.handleUploadImg(e)}
          ></input>
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
