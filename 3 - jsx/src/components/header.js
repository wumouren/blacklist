import React from 'react';

export default class Header extends React.Component {
    
    render() {
        
        let userName = 'jack';
        return (
            <div>
                <h1>这里是头部</h1>
                <h1>{userName ? '用户名是：' + userName : '您还没有登录'}</h1>
            </div>
        )
    }
}