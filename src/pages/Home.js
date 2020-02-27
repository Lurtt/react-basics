import React, { Fragment } from 'react';

import Headline from '../components/Headline'
import PokemonList from '../components/PokemonList'

const Home = () => {

  return (
    <Fragment>
      <Headline>Home page</Headline>
      <PokemonList />
    </Fragment>
  )
}

export default Home;
