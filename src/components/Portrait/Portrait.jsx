import React from 'react';
import PropTypes from 'prop-types';

import './Portrait.scss';

const Portrait = ({ image }) => (
  <div className="portrait">
    <img src={image} alt="" />
  </div>
);

Portrait.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Portrait;
