import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
export default class Body extends Component {
  static contextTypes = {
    store: PropTypes.object,
    getStore: PropTypes.func,
    subscribe: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {};
  }
  componentWillMount(){
    const { subscribe } = this.context;
    this._upState();
    subscribe(() => this._upState())
  }
  _upState(){
    const { getStore } = this.context;
    this.setState({
      ...getStore()
    })
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
