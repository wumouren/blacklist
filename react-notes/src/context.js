import React from 'react';
import PropTypes from 'prop-types';

import Child from './child'

export default class Context extends React.Component {
  // 定义 context 中数据类型
  static childContextTypes = {
    text: PropTypes.string,
    change: PropTypes.func
  }

  // 返回 context
  getChildContext() {
    return { 
      text: this.state.text,
      change: this.state.change
    }
  }
  constructor() {
    super()
    this.state = {
      text: '我是初始数据',
      change: (data) => this.change(data) // 注意 this 指向
    };
    
  }
  change(data){
    this.setState({
      text: data
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.text}</div>
        <Child></Child>
      </div>
    )
  }
}