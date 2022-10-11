import React from "react";
import helpers from "../helpers";
import { EducationCard } from "./education-card";

class Education extends React.Component {
  state = {
    education: [
      {
        id: helpers.uid(),
        degree: "Insert your Degree",
        subject: "insert main subjects",
        uni: "Insert University",
        years: "Period yyyy - yyyy",
      },
      {
        id: helpers.uid(),
        degree: "Insert your 2",
        subject: "insert main 2",
        uni: "Insert 2",
        years: "Period yyyy - 2",
      },
    ],
    modal: {
      isShown: false,
      isEditing: false,
    },
  };

  /* Delete Edu */

  deleteEdu(id) {
    this.setState({
      ...this.state,
      education: this.state.education.filter((edu) => {
        return edu.id !== id;
      }),
    });
  }

  editEdu(edu) {
    this.setState({
      ...this.state,
      modal: {
        ...this.state.modal,
        isShown: true,
        isEditing: true,
        eduToEdit: edu,
      },
    });
  }

  addEducation(e) {
    this.setState({
      ...this.state,
      modal: {
        ...this.state.modal,
        isShown: true,
        isEditing: false,
        eduToEdit: {
          id: helpers.uid(),
          degree: "Insert your Degree",
          subject: "What were your Subjects?",
          uni: "University of Awesomeness",
          years: "1990 - 1999",
        },
      },
    });
  }
  render() {
    const listEdu = this.state.education.map((edu) => {
      return (
        <div className="flex-edu-card">
          <EducationCard eduData={edu} key={edu.id} />
          <button className="edu-edit-btn" onClick={() => this.editEdu(edu)}>
            Edit
          </button>
          <button
            className="edu-edit-btn"
            onClick={(e) => this.deleteEdu(edu.id)}
          >
            Delete
          </button>
        </div>
      );
    });
    return (
      <div className="side-card">
        <h2>Education</h2>
        {listEdu}
        <button onClick={(e) => this.addEducation(e)}>Add</button>
        {this.state.modal.isShown && (
          <EducationModal
            isEditing={this.state.modal.isEditing}
            setData={this.setState.bind(this)}
            eduToEdit={this.state.modal.eduToEdit}
          />
        )}
      </div>
    );
  }
}

class EducationModal extends React.Component {
  state = this.props.eduToEdit;

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  handleSubmit() {
    const eduToEdit = this.state;
    if (this.props.isEditing) {
      this.props.setData((prevState) => ({
        ...prevState,
        education: prevState.education.map((edu) => {
          if (edu.id === eduToEdit.id) return eduToEdit;
          else return edu;
        }),
      }));
    } else {
      this.props.setData((prevState) => ({
        ...prevState,
        education: [...prevState.education, eduToEdit],
      }));
    }
    this.props.setData((prevState) => ({
      ...prevState,
      modal: {
        ...prevState.modal,
        isShown: false,
      },
    }));
  }

  render() {
    return (
      <div className="eduModal">
        <h3>{this.props.isEditing ? "Edit" : "Add"} Education:</h3>
        <label htmlFor="degree">Degree</label>
        <input
          onChange={(e) => this.handleChange(e)}
          type="text"
          className="edu-modal-input"
          name="degree"
          value={this.state.degree}
        />
        <label htmlFor="subject">Subjects</label>
        <input
          onChange={(e) => this.handleChange(e)}
          type="text"
          className="edu-modal-input"
          name="subject"
          value={this.state.subject}
        />
        <label htmlFor="uni">University</label>
        <input
          onChange={(e) => this.handleChange(e)}
          type="text"
          className="edu-modal-input"
          name="uni"
          value={this.state.uni}
        />
        <label htmlFor="years">Period (mm/yyy)</label>
        <input
          onChange={(e) => this.handleChange(e)}
          type="text"
          className="edu-modal-input"
          name="years"
          value={this.state.years}
        />
        <button onClick={(e) => this.handleSubmit(e)}>
          {this.props.isEditing ? "Submit" : "Add"}
        </button>
      </div>
    );
  }
}

export { Education };
