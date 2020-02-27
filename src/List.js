import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Headline from './Headline'

const List = ({ title, data = [], titleLevel = 1, loading }) => {
  return (
    <Fragment>
      <Headline level={titleLevel}>
        {title}
      </Headline>
      {loading ? <Headline level={4}>Loading data...</Headline> : (
        <ul>
          {data.map((item, index) => <li key={index}>{item.name}, {item.url}</li>)}
        </ul>
      )}
      
    </Fragment>
  )
}

// List.defaultProps = {
//   titleLevel: 5,
// }

const PokemonType = PropTypes.shape({
  name: PropTypes.string,
  url: PropTypes.string,
})

List.propTypes = {
  title: PropTypes.string.isRequired,
  titleLevel: PropTypes.number,
  data: PropTypes.arrayOf(PokemonType).isRequired,
  loading: PropTypes.bool.isRequired
}

export default List