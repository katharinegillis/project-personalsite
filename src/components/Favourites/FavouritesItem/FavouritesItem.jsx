import React from 'react';
import PropTypes from 'prop-types';

const FavouritesItem = ({ item }) => (
  <div className="favourites__item">
    {item}
  </div>
);

FavouritesItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default FavouritesItem;
