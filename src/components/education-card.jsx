import React from "react";

class EducationCard extends React.Component {
  render() {
    const data = this.props.eduData;
    return (
      <div className="education-card">
        <h3>{data.degree}</h3>
        <p>{data.uni}</p>
        <p>{data.subject}</p>
        <p>{data.years}</p>
      </div>
    );
  }
}

export { EducationCard };
