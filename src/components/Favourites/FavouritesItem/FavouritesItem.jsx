import React from 'react';
import PropTypes from 'prop-types';

import './FavouritesItem.scss';

const FavouritesItem = ({ item }) => (
  <div className="favourites__item">
    {item}
  </div>
);

FavouritesItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default FavouritesItem;
