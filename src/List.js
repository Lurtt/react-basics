import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Headline from './Headline'

const List = ({ title, data = [], titleLevel = 1}) => {
  return (
    <Fragment>
      <Headline level={titleLevel}>
        {title}
      </Headline>
      <ul>
        {data.map((item, index) => <li key={index}>{item.name}, {item.url}</li>)}
      </ul>
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
  data: PropTypes.arrayOf(PokemonType).isRequired
}

export default List