import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
export default class Body extends Component {
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
      <div>
        <div className="body">{this.state.body}</div>
        <Button />
      </div>
    );
  }
}
