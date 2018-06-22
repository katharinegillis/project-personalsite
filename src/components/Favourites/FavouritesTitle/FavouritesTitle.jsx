import React from 'react';
import PropTypes from 'prop-types';

import './FavouritesTitle.scss';

const FavouritesTitle = ({ title }) => (
  <div className="favourites__title">
    {title}
  </div>
);

FavouritesTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FavouritesTitle;
