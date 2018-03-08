import React from 'react';

export default class Container extends React.Component {
  constructor(){
    super()
    console.log(this)
  }
  render(){
    return (
      <div className="container">
        <div className="head">{this.props.children[0]}</div>
        <div className="body">{this.props.children[1]}</div>
      </div>
    )
  }
}