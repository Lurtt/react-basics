import React from 'react';

import List from './List'
import useApi from './hooks/useApi'

const PokemonList = () => {
  const [data, loading ] = useApi('/pokemon')

  return (
    <List data={data} loading={loading} title="Pokemons" titleLevel={2} />
  )
}

export default PokemonList