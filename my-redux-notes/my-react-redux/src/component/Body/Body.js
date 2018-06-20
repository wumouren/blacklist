import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
export default class Body extends Component {
  static contextTypes = {
    body: PropTypes.string,
  }
  constructor (props, context) {
    super(props)
    this.state = context;
  }
  render() {
    return (
      <div>
        <div className="body">{this.state.body}</div>
        <Button />
      </div>
    );
  }
}
