import React from 'react';
export default class Two extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      higher: 0
    }
  }
  componentWillMount() {
    // let higher = this.props.higher * 2
    // this.setState({
    //   higher: higher
    // })
  }
  render() {
    return (
      // <h1>{this.state.higher}</h1>
      <h1>{this.props.higher}</h1>

    )
  }
}