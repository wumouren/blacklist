import React from 'react';
import PropTypes from 'prop-types';

export default class Buttons extends React.Component {
  // 检测类型
  static contextTypes = {
    text: PropTypes.string,
    change: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.state = {
      text: 'button'
    }
  }
  componentWillMount(){
    this.setState({
      text: this.context.text
    })
  }
  changeContext(){
    let text = '这是修改后的数据';
    this.context.change(text) // 注意this 指向
  }
  render() {
    return (
      <div>
        <div>{this.state.text}</div>
        <button onClick={() => this.changeContext()}>按键</button>
      </div>
    )
  }
}