import React, { Component } from 'react';

export class Status extends Component {
  actions = this.updateActions;

  updateActions = () => {
    return this.props.actions.slice(0).reverse().map((action,i) =>
      <li key={i}>{action}</li>
    );
  }

  render() {
    return (
      <div className="card">
        <div className="card-header text-center">
          {this.props.title}
        </div>
        <div className="card-body" >
          <ul className="list-unstyled mb-0">
            {this.actions}
          </ul>
        </div>
      </div>
    )
  }

  componentWillReceiveProps() {
    this.actions = this.updateActions();
  }
}

export default Status;
