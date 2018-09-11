import React from 'react';
import PropTypes from 'prop-types';

const FavouritesTitle = ({ title }) => (
  <h2 className="favourites__title">
    {title}
  </h2>
);

FavouritesTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FavouritesTitle;
