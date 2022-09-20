import React from 'react'

class Summary extends React.Component {
    render() {
      return (
        <div className="main-content-card">
        <h1 className="main-content-heading">Summary</h1>
        <p>{this.props.summary}</p>
        </div>
      )
    }
  }
  
  export { Summary }