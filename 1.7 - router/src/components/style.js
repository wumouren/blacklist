import React from 'react';
const StyleInfo = require('../less/style.less');
export default class StyleComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            changeStyle: true
        }
    }

    changeStyle(){
        this.setState({
            changeStyle: !this.state.changeStyle
        })
    }

    render() {
        // 不推荐
        // const style = {
        //     height: (this.state.changeStyle) ? '100px' : '200px',
        //     background: '#333',
        //     color: '#fff',
        //     fontSize: '20px'
        // }

        return(
            <div className={StyleInfo.style} /*style={style}*/ onClick={this.changeStyle.bind(this)} >
                <h1 className="text">这里演示 style </h1>
                <hr />
            </div>
        )
    }
}