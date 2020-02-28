import React from 'react'
import { Switch, Route } from "react-router-dom"

import { UserProvider } from './contexts/userContext'
import Home from './pages/Home'
import Examples from './pages/Examples'
import Header from './components/Header'

const App = () => (
  <UserProvider>
    <Header />

    <Switch>
      <Route path="/examples">
        <Examples />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </UserProvider>
)


export default App;
