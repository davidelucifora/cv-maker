import React from "react";
import helpers from "../helpers";
import { ExperienceCard } from "./experience-card";

class Experience extends React.Component {
  state = {
    experiences: [
      {
        id: helpers.uid(),
        jobTitle: "Your Job Title",
        companyName: "The Company",
        years: "Period (e.g. 2022 - Present or 2009 - 2010)",
        desc: "Write a few lines about what you did there.",
      },
    ],
  };
  addExperience() {
    this.setState({
      ...this.state,
      experiences: [
        ...this.state.experiences,
        {
          id: helpers.uid(),
          jobTitle: "Your Job Title",
          companyName: "The Company",
          years: "Period (e.g. 2022 - Present or 2009 - 2010)",
          desc: "Write a few lines about what you did there.",
        },
      ],
    });
  }

  deleteExperience(id) {
    if (this.state.experiences.length > 1) {
      this.setState({
        ...this.state,
        experiences: this.state.experiences.filter(function (experience) {
          return experience.id !== id;
        }),
      });
    } else alert("You need at least 1 Experience");
  }
  render() {
    const listXp = this.state.experiences.map((experience) => {
      return (
        <ExperienceCard
          className="experience-card"
          xpData={experience}
          key={experience.id}
          deleteExperience={() => this.deleteExperience(experience.id)}
        />
      );
    });

    return (
      <div className="main-content-card">
        <h1 className="main-content-heading">Experience</h1>
        {this.state.experiences.length && listXp}

        <button id="add-experience" onClick={(e) => this.addExperience(e)}>
          Add Experience
        </button>
      </div>
    );
  }
}

export { Experience };
