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
      text: 'child'
    }

  }
  componentWillMount(){
    this.setState({
      text: this.context.text
    })

    //添加定时器，打印 this
    setTimeout(()=>{
      this.setState({
        text: this.context.text
      })
      console.log(this)
    },3000)
  }
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <Buttons></Buttons>
      </div>
    )
  }
}