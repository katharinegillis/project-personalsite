import React from 'react';
import PropTypes from 'prop-types';

const Favourites = ({ title, items, theme }) => {
  let icon = '';
  if (theme === 'tv') {
    icon = <i className="material-icons">desktop_windows</i>;
  } else if (theme === 'music') {
    icon = <i className="material-icons">headset</i>;
  }

  return (
    <div className="favourites">
      <h2 className="favourites__title">
        {title}
      </h2>
      {items.map(item => (
        <h4 key={item} className="favourites__item">
          {icon}
          {item}
        </h4>
      ))}
    </div>
  );
};

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
