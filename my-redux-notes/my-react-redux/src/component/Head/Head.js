import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Head extends Component {
  static contextTypes = {
    head: PropTypes.string,
  }
  constructor (props, context) {
    super(props)
    this.state = context;
  }
  render() {
    return (
      <div className="head">{this.state.head}</div>
    );
  }
}

