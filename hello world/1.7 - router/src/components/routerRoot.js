import React from 'react';
import ReactDom from 'react-dom';
import { Link,Route,HashRouter } from 'react-router-dom';

import IndexBody from './routerBody';
import IndexList from './routerList';
import IndexDetail from './routerDetail';
export default class IndexRoot extends React.Component{

    render(){
        return(
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">主页</Link></li>
                        <li><Link to="/hot">热门</Link></li>
                        <li><Link to="/zhuanlan">专栏</Link></li>
                    </ul>
                    <Route exact path="/" component={IndexBody}/>
                    <Route path="/hot" component={IndexList} />
                    <Route path="/zhuanlan" component={IndexDetail}/>
                </div>
            </HashRouter>
        )
    }
}
