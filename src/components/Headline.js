import React from 'react';

import { root } from './Headline.module.css'

const Headline = ({ children, level = 1 }) => {
  const Element = `h${level}`

  return (
    <Element className={root}>{children}</Element>
  )
}

export default Headline