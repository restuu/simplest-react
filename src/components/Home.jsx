import React from 'react';

export default class Home extends React.Component {
  constructor () {
    super();
    this.message = 'Welcome to Homepage';
  }

  render () {
    return (
      <div>
        <h1>Homepage</h1>
        <p>{ this.message }</p>
      </div>
    );
  }
}
