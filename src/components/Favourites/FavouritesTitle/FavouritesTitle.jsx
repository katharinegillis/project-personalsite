import React from 'react';
import PropTypes from 'prop-types';

const FavouritesTitle = ({ title }) => (
  <div className="favourites__title">
    {title}
  </div>
);

FavouritesTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FavouritesTitle;
