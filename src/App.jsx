import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import "./App.css";
import { Contact } from "./components/contact";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { Summary } from "./components/summary";
import { Modal } from "./components/modal";

class App extends React.Component {
  state = {
    showModal: true,
  };

  closeModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <div id="App" className="App">
        {this.state.showModal && (
          <Modal closeModal={this.closeModal.bind(this)} />
        )}
        <Header fullName="Davide Lucifora" jobTitle="SaaS Account Executive" />
        <div className="sidebar">
          <Contact />
          <Education />
        </div>
        <div className="main-section">
          <Summary
            summary="Lorem Ipsum chupami la cabra fava fava fava lettaLorem Ipsum chupami la cabra fava fava fava lettaLorem 
          Ipsum chupami la cabra fava fava fava lettaLorem Ipsum chupami la cabra fava fava fava letta"
          />
          <Experience />
        </div>
        <div className="controls"></div>
      </div>
    );
  }
}

export default App;
