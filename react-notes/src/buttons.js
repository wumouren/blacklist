import React from 'react';
import PropTypes from 'prop-types';

export default class Buttons extends React.Component {
  // 检测类型
  static contextTypes = {
    text: PropTypes.string,
    changeText: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }
  changeText(){
    let text = '我是更改后的信息'
    this.context.changeText(text)
    // this.context.text = text
    // console.log(this)
  }
  componentWillMount(){
    this.setState({
      text: this.context.text
    })
  }
  render() {
    return (
      <div>
        <div>我是孙子组件，我获取到了 context : {this.state.text}</div>
        <button onClick={() => this.changeText()}>按键</button>
      </div>
    )
  }
}