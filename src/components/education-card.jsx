import React from "react";

class EducationCard extends React.Component {
  render() {
    return (
      <div className="education-card">
        <h3>{this.props.degree}</h3>
        <p>{this.props.subject}</p>
        <p>{this.props.uni}</p>
        <p>{this.props.years}</p>
      </div>
    );
  }
}

export { EducationCard };
