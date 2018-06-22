import React from 'react';
import PropTypes from 'prop-types';

import './Content.scss';

const Content = ({ children }) => (
  <div className="content">
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Content.defaultProps = {
  children: null,
};

export default Content;
