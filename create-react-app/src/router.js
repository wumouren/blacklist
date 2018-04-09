// import React, { Component } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/app/App';
import Home from './components/home/Home';

// 两种写法都可以
// export default class Routers extends Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route exact path='/' component={App}/>
//         </Switch>
//       </Router>
//     );
//   }
// }
const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/home' component={Home}/>
      </Switch>
    </Router>
  );
}

export default Routers;