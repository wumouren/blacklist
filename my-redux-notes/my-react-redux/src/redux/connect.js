import React, { Component } from 'react';
import PropTypes from 'prop-types';
export const connect = (Comp) => {
  class Connect extends Component {
    render(){
      return (
        <div className="connect">
          <Comp />
        </div>
      );
    }
  }
  return Connect;
}