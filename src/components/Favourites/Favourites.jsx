import React from 'react';
import PropTypes from 'prop-types';

import './Favourites.scss';
import FavouritesTitle from './FavouritesTitle/FavouritesTitle';
import FavouritesItem from './FavouritesItem/FavouritesItem';

const Favourites = ({ title, items }) => (
  <div className="favourites">
    <FavouritesTitle title={title} />
    {items.map(item => <FavouritesItem item={item} />)}
  </div>
);

Favourites.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
};

Favourites.defaultProps = {
  items: [],
};

export default Favourites;
