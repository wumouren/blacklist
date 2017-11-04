import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
const man = {
    name: 'jack',
    age: '18',
    tel: '123456'
}; 
let info = [];
for(let item in man){
    info.push(
        <h1 key={ item }>{ man[item] }</h1>
    )
}
class Index extends React.Component{
    constructor(){                                   // 初始化组件状态
        super();
        this.state = {
            add: '我在等待子组件传值'
        }
    }
    change(val){                                    // 传递给子组件的回调函数
        this.setState({
            add: val
        })
    }
    render(){
        return (
            <div>
                {info}
                <Header val={man} change={this.change.bind(this)} ></Header>
                <h1>这是从子组件传递过来的值:{ this.state.add }</h1>
            </div>
        )
    }
}

ReactDOM.render(
   <Index/>,
    document.getElementById('app')
)