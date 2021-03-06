import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { connect } from '../../redux';
class Body extends Component {
  render() {
    return (
      <div>
        <div className="body">{this.props.body}</div>
        <Button />
      </div>
    );
  }
}
const propsType = {
  store: PropTypes.object,
}
export default connect(Body, propsType)