import React from 'react';
import { Route, Link } from 'react-router-dom';
export default class DetailChild extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/one`} >one</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/two`}>two</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/three`}>three</Link>
                    </li>
                    <Route path={`${this.props.match.url}/:name`} component={childDeatil} />
                </ul>
            </div>
        )
    }
}
const childDeatil = ((match) => {
    return <div>{match.match.params.name}</div>
})