import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About/';
import AllPosts from './pages/AllPosts';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/allposts/:posts" component={AllPosts} />
        <Redirect exact from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
