import React from 'react';
import { Route, Link } from 'react-router-dom';
import ChildDetail from './childDetail';

export default class IndexDetail extends React.Component{

    render(){
        return (
            <div>
                <h1>这是主要列表详情</h1>
                <ChildDetail match={this.props.match} />
            </div>
        )
    }
}