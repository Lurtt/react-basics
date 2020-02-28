import React from 'react'
import { Link } from "react-router-dom";

import UserContext from '../contexts/userContext'
import { root, navigation } from './Header.module.css'

const Header = () => (
  <header className={root}>
    <nav className={navigation}>
      <Link to="/">Home</Link>
      <Link to="/examples">Component Examples</Link>
    </nav>

    {/* old usage */}
    <UserContext.Consumer>
      {({ user }) => <div>{`${user.firstname}, ${user.lastname}, ${user.email}`}</div>}
    </UserContext.Consumer>
  </header>
)

export default Header