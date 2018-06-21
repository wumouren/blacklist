import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from '../../redux';
class Button extends Component {
  changeContext(type, value){
    const { dispatch } = this.props;
    dispatch({ 
      type: type,
      head: value
    });
  }
  render() {
    return (
      <div className="button">
        <div className="btn" onClick={() => this.changeContext('HEAD', '我是改变的数据1')}>{this.props.headBtn}</div>
        <div className="btn" onClick={() => this.changeContext('HEAD', '我是改变的数据2')}>{this.props.bodyBtn}</div>
      </div>
    );
  }
}
export default connect(Button)