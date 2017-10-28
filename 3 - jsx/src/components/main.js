import React from 'react';
export default class Main extends React.Component {
    
    render() {
        
        const info = {
            age: 30,
            like: 'book',
            sex: 'man',
        }
        let res = [];
        for(let _key in info){
            res.push(<h3 key={_key}> {_key} : {info[_key]}</h3>)
        }
        return (
            <div>
                <h1>这里是主要内容</h1>
                <div id="box">{res}</div>
            </div>
        )
    }
} 