import React from 'react';
import PropTypes from 'prop-types';

import Child from './child'

export default class Context extends React.Component {
  // 定义 context 中数据类型
  static childContextTypes = {
    text: PropTypes.string,
    changeText: PropTypes.func
  }

  // 返回 context
  getChildContext() {
    return {
      text: this.state.text,
      changeText: this.changeText.bind(this),
    }
  }
  changeText(text){
    this.setState({
      text: text
    })
    console.log(text,this)
  }
  constructor() {
    super()
    this.state = {
      text: '我是初始数据'
    }
  }

  render() {
    return (
      <div>
        <Child></Child>
      </div>
    )
  }
}