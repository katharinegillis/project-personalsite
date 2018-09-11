import React from 'react';
import PropTypes from 'prop-types';

import FavouritesTitle from './FavouritesTitle/FavouritesTitle';
import FavouritesItem from './FavouritesItem/FavouritesItem';

const Favourites = ({ title, items, theme }) => (
  <div className="favourites">
    <FavouritesTitle title={title} />
    {items.map(item => <FavouritesItem item={item} key={item} theme={theme} />)}
  </div>
);

Favourites.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.string,
};

Favourites.defaultProps = {
  items: [],
  theme: null,
};

export default Favourites;
