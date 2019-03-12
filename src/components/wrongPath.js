import React, { Component } from 'react';

export class WrongPath extends Component {
  render() {
    return (
      <div className="errorText">
        <h1>Chosen path doesn't exist!</h1>
      </div>
    );
  }
}