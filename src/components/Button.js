import React, { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <button className="btn btn-primary w-100" onClick={this.props.clicked}>{this.props.text}</button>
    )
  }
}

export default Button;
