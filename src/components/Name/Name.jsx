import React from 'react';
import PropTypes from 'prop-types';

import './Name.scss';

const Name = ({ name }) => (
  <div className="c-name">
    {name}
  </div>
);

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
