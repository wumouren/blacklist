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
        // 获取 DOM 节点，方法一
        // let doc = document.getElementById('head')
        // console.log(doc)
        // 获取 DOM 节点，方法二
        let doc = this.refs.head;
        console.log(doc)
    }

    render(){

        let str = '这是子组件数据'

        return (
            <div>
                <h1  id="head" ref="head">数据双向绑定演示：</h1>
                <h2>按钮点击后这里改变为：{this.state.str}</h2>
                <input type="button" value="button" onClick={this.btnClick.bind(this,'110')}/><br/>
                <h1>这里是双向数据绑定演示</h1>
                <input type="text" onChange={this.props.bing.bind(this,'hello man')} />
                <input type="button" onClick={this.props.getRefs.bind(this,this)} value="通过传参，父组件获取子组件DOM节点"/>
            </div>
        )
    }
}
Binding.propstype = {

}
Binding.defaultProps ={
    
}