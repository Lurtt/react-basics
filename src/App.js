import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import Examples from './pages/Examples'
import Header from './Header'

const App = () => {

  return (
    <Fragment>
      <Header />

      <Switch>
        <Route path="/examples">
          <Examples />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  )
}

export default App;
