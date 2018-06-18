import React from 'react';
import PropTypes from 'prop-types';

import './blurbtext.scss';

const BlurbText = ({ text }) => (
  <div className="blurb__text">
    {text}
  </div>
);

BlurbText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BlurbText;
