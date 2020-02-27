import React, { Fragment } from 'react';

import Headline from '../Headline'
import PokemonList from '../PokemonList'

const Home = () => {

  return (
    <Fragment>
      <Headline>Home page</Headline>
      <PokemonList />
    </Fragment>
  )
}

export default Home;
