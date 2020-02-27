import React from 'react'
import { Link } from "react-router-dom";

import { root, navigation } from './Header.module.css'

const Header = () => (
  <header className={root}>
    <nav className={navigation}>
      <Link to="/">Home</Link>
      <Link to="/examples">Component Examples</Link>
    </nav>
  </header>
)

export default Header