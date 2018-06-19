import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from './component/Head/Head';
import Body from './component/Body/Body';
export default class App extends Component {
  static childContextTypes = {
    head: PropTypes.string,
    body: PropTypes.string,
    headBtn: PropTypes.string,
    bodyBtn: PropTypes.string
  }
  getChildContext () {
    const store = {
      head: '我是全局 head',
      body: '我是全局 body',
      headBtn: '修改 head',
      bodyBtn: '修改 body'
    }
    return { ...store }
  }

  render() {
    return (
      <div className="App">
        <Head />
        <Body />
      </div>
    );
  }
}
