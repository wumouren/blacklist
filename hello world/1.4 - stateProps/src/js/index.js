import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import Binding from '../components/binding' // 双向数据绑定
class Index extends React.Component {
    constructor() {
        super();
        this.state = {
           info: '这里是 footer',
           bindingVal: ''
        } 
    }
    changeBinding(str,even){
        this.setState({
        bindingVal:{
                val: even.target.value,
                str: str
           }  
        })
    }
    render() {
        return (
            <div>
                <Header bindVal = {this.state.bindingVal}/>
                <Main/>
                <Binding bing={this.changeBinding.bind(this)/*注意 this 指向，这里要bind*/}/> 
                <Footer info={this.state.info} />
            </div>
        )
    }
}

ReactDom.render(
    <Index/>,
    document.getElementById('app')
)