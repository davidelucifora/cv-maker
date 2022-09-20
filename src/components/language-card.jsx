import React from 'react'

class LanguageCard extends React.Component {
    render() {
        return(
                <span>{`${this.props.language} : ${this.props.languageLevel}`}</span>
          
        )
    }
}

export { LanguageCard }