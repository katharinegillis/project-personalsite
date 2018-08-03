import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = ({ portrait, name, descriptors }) => (
  <div className="l-header">
    <div className="l-header__portrait">
      {portrait}
    </div>
    <div className="l-header__content">
      {name}
      {descriptors}
    </div>
  </div>
);

Header.propTypes = {
  portrait: PropTypes.element.isRequired,
  name: PropTypes.element.isRequired,
  descriptors: PropTypes.element.isRequired,
};

export default Header;
