import React from 'react'; // 引入模板依赖

export default class Header extends React.Component{ // 声明组件
    constructor(){
        super(); // 状态初始化
        this.state = { // 设置 state 状态值
            name: 'header',
            time: '2017-11-4'
        }
    }
    set() {
        this.setState({
            say: 'hello',
            time: '2017年'
        })
    }
    componentDidMount() {
        var Dom = document.getElementById('app');
        console.log(Dom)
        console.log(this.refs.head)
    }
    render() {
        console.log(this)
        return (
            <div>
                <h1 ref="head">这是头部组件</h1>
                <h2>state 属性中 time 的值是：{this.state.time}</h2>
                <button onClick={this.set.bind(this)} >点击我改变 state 中 time 值</button>
                <hr />
                <button onClick={this.props.change.bind(this,'我是传递给父组件的值')} >点击我给父组传值</button>
            </div>
        )
    }
}
