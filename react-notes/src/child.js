import React from 'react';
import PropTypes from 'prop-types';

import Buttons from './buttons'

export default class Child extends React.Component {
  // 检测类型
  static contextTypes = {
    text: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  componentWillMount(){
    this.setState({
      text: this.context.text
    })
  }
  render() {
    return (
      <div>
        <h1>child</h1>
        <h2>我是子组件，我获取到了 context : {this.state.text}</h2>
        <Buttons></Buttons>
      </div>
    )
  }
}