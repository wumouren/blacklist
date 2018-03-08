import React from 'react';
export default class One extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      higher: 0
    }
  }
  componentWillMount(){
    // let higher = this.props.higher * 2
    // this.setState({
    //   higher: higher
    // })
  }
  render() {
    return (
      // <div>{this.state.higher}</div>
      <div>{this.props.higher}</div>
    )
  }
}