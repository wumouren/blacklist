import React from 'react';

export default class Footer extends React.Component {
    // props 演示

    render() {
        let footer = ['2017','10','28'];
        
        return (
            
            <footer>
                <hr/>
                <h1>这里是页脚</h1>
                <h2>从父组件传递过来的数据是： {this.props.info}</h2>
                <span>{footer}</span>
            </footer>
        )
    }
}