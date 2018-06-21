import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Button extends Component {
  static contextTypes = {
    store: PropTypes.object,
    dispatch: PropTypes.func,
    subscribe: PropTypes.func,
    getStore: PropTypes.func
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
  changeContext(type, value){
    const { dispatch } = this.context;
    dispatch({ 
      type: type,
      head: value
    });
  }
  render() {
    return (
      <div className="button">
        <div className="btn" onClick={() => this.changeContext('HEAD', '我是改变的数据1')}>{this.state.headBtn}</div>
        <div className="btn" onClick={() => this.changeContext('HEAD', '我是改变的数据2')}>{this.state.bodyBtn}</div>
      </div>
    );
  }
}