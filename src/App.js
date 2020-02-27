import React, { Fragment } from 'react';

import './App.css';
import pokemonData from './data'
import List from './List'
import Headline from './Headline'


const App = () => {
  return (
    <Fragment>
      <Headline>My Frist App</Headline>
      <List data={pokemonData} title="Pokemons" titleLevel={2} />
    </Fragment>
  )
}

export default App;
