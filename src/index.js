import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowersHistory from 'history/createBrowserHistory'
import App from "./components/App";
import Jokes from "./components/Jokes"
import './index.scss'
import Projects from "./components/Projects";
import SocialProfiles from "./components/SocialProfiles";


ReactDOM.render(
  <Router history={createBrowersHistory()}>
    <Switch>
      <Route exact path = '/' component={App}></Route>
      <Route path = '/jokes' component={Jokes}></Route>
      <Route path = '/projects' component={Projects}></Route>
      <Route path = '/contact' component={SocialProfiles}></Route>
    </Switch>
  </Router>, document.getElementById('root')
);

