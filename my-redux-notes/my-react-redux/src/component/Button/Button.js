import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Button extends Component {
  static contextTypes = {
    headBtn: PropTypes.string,
    bodyBtn: PropTypes.string
  }
  constructor (props, context) {
    super(props)
    this.state = context;
  }
  render() {
    return (
      <div className="button">
        <div className="btn">{this.state.headBtn}</div>
        <div className="btn">{this.state.bodyBtn}</div>
      </div>
    );
  }
}