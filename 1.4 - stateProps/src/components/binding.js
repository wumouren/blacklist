import React from 'react';

export default class Binding extends React.Component {
    // 双向数据绑定演示
    constructor(){
        super();
        this.state = {
           str: '120'
        }
    }

    btnClick(str){
        this.setState({
            str: str
        })
    }

    render(){

        let str = '这是子组件数据'

        return (
            <div>
                <h1>数据双向绑定演示：</h1>
                <h2>按钮点击后这里改变为：{this.state.str}</h2>
                <input type="button" value="button" onClick={this.btnClick.bind(this,'110')}/><br/>
                <h1>这里是双向数据绑定演示</h1>
                <input type="text" onChange={this.props.bing.bind(this,'hello man')} />
            </div>
        )
    }
}