import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div className="overlay" onClick={this.props.closeModal}>
        <div className="modal">
          <h3>Welcome to the CV App!</h3>
          <p>
            Click on Any field to edit your info. <br />
            You can Add experience or Education using the Add Buttons.
            <br />
            Click on Save to PDF to save your CV
          </p>{" "}
          <br />
          <p>Click anywhere to close this dialog.</p>
        </div>
      </div>
    );
  }
}

export { Modal };
