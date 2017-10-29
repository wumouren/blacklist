import React from 'react';

export default class Header extends React.Component {
    // state 演示
    constructor(){
        super() // 初始化 state 状态
        let names = ['jack','tom','lili'];
        this.state = {name: names}
    }
    list(){ // 重新组装格式
        let nameArr = [];
        this.state.name.map(function(item){
            nameArr.push(
                <h3 key={item}>{item}</h3>
            )
        })
        this.setState({
            nameList: nameArr
        })
    }
    componentWillMount(){ // render 之前调用组装方法，重新组装数据
        this.list();
    }

    render() {
        let userName = 'jack';
        
        return (
            <div>
                <h1>这里是头部</h1>
                <div>
                    <h2> state 中数据渲染 ：</h2>
                    {this.state.nameList}
                </div> 
                <h1>这里是通过数据双向绑定，从 binding 文件中传来的值：{this.props.bindVal.str} : {this.props.bindVal.val}</h1>
                <hr/>
            </div>
        )
    }
}