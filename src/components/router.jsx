import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Home from './home';
import Bio from './bio';

class Router extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route  exact path="/" component={Home} key={1}/>
          <Route  path="/bio" component={Bio} key={3}/>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>

    )
  }
}

export default Router;
