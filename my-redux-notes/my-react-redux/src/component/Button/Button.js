import React, { Component } from 'react';
export default class Button extends Component {
  render() {
    return (
      <div className="button">
        <div className="btn">改变 head</div>
        <div className="btn">改变 body</div>
      </div>
    );
  }
}