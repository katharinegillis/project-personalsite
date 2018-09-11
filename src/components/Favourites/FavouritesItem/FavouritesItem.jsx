import React from 'react';
import PropTypes from 'prop-types';

const FavouritesItem = ({ item, theme }) => {
  let icon = '';
  if (theme === 'tv') {
    icon = <i className="material-icons">desktop_windows</i>;
  } else if (theme === 'music') {
    icon = <i className="material-icons">headset</i>;
  }

  return (
    <h4 className="favourites__item">
      {icon}
      {item}
    </h4>
  );
};

FavouritesItem.propTypes = {
  item: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

FavouritesItem.defaultProps = {
  theme: null,
};

export default FavouritesItem;
