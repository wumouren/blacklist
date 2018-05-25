import React, { Component } from 'react';
import Head from './component/Head/Head';
import Body from './component/Body/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Body />
      </div>
    );
  }
}

export default App;
