import React, { Component } from 'react';
import './App.less';
import { Button } from 'antd';

class App extends Component {
  // 路由跳转
  toHome(){
    this.props.history.push('/home')
  }
  render() {
    return (
      <div className="App">
        <h1>app</h1>
        <Button type="primary" onClick={() => {this.toHome()}}>app to home</Button>
      </div>
    );
  }
}

export default App;
