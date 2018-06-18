import React from 'react';
import PropTypes from 'prop-types';

import './name.scss';

const Name = ({ name }) => (
  <div className="name">
    {name}
  </div>
);

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
