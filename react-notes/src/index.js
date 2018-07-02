import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './container';
import Head from './head';
import One from './one';
import Two from './two';
import Context from './context';

const higher = function(Component,data){
  class Higher extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        higher: 0
      }
    }
    componentWillMount() {
      let higher = data * 2
      this.setState({
        higher: higher
      })
    }
    render() {
      return (
        <Component higher={this.state.higher}></Component>
      )
    }
  }

  return Higher
}

let CopyOne = higher(One,30);
let CopyTwo = higher(Two, 40);

ReactDOM.render(
  <div>
    <Context></Context>
    {/* <CopyOne></CopyOne>
    <CopyTwo></CopyTwo>
    <One higher={10}></One>
    <Two higher={20}></Two>
    <Container>
      <h1>hello man</h1>
      <Head></Head>
    </Container> */}
  </div>,
  document.getElementById('root')
);