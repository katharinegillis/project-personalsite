import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children }) => (
  <div className="footer">
    {children}
  </div>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Footer.defaultProps = {
  children: null,
};

export default Footer;
