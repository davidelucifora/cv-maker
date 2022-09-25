import React from "react";
import helpers from "../helpers";

class Summary extends React.Component {
  state = {
    text: "Write here your description",
  };

  handleChange(e) {
    helpers.autoExpand(e.target);
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  render() {
    return (
      <div className="main-content-card">
        <h1 className="main-content-heading">Summary</h1>
        <textarea
          value={this.state.text}
          name="text"
          onChange={(e) => this.handleChange(e)}
          className="xp-textarea editable-field"
        ></textarea>
      </div>
    );
  }
}

export { Summary };
