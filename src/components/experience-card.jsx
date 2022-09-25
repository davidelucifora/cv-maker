import React from "react";
import helpers from "./../helpers";
class ExperienceCard extends React.Component {
  state = this.props.xpData;

  handleChange(e) {
    const { name, value } = e.target;

    name === "desc" && helpers.autoExpand(e.target);

    this.setState({
      ...this.state,
      [name]: value,
    });
  }
  render() {
    return (
      <div className="experience-card">
        <div className="flex">
          <input
            className="editable-field xp-job-title"
            name="jobTitle"
            value={this.state.jobTitle}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <button onClick={() => this.props.deleteExperience(this.state.id)}>
            Delete
          </button>
        </div>
        <input
          className="xp-company-name editable-field"
          name="companyName"
          value={this.state.companyName}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <input
          className="xp-years-in-company editable-field"
          name="years"
          value={this.state.years}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <textarea
          type="textarea"
          className="xp-textarea editable-field"
          name="desc"
          value={this.state.desc}
          onChange={(e) => this.handleChange(e)}
        ></textarea>
      </div>
    );
  }
}

export { ExperienceCard };
