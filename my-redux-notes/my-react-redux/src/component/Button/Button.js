import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Button extends Component {
  static contextTypes = {
    head: PropTypes.string,
    body: PropTypes.string,
    headBtn: PropTypes.string,
    bodyBtn: PropTypes.string
  }
  constructor () {
    super()
    this.state = {}
  }
  componentWillMount(){
    this.setState({
      ...this.context
    })
    console.log(this)
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