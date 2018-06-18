import React from 'react';
import PropTypes from 'prop-types';

import './blurbtitle.scss';

const BlurbTitle = ({ title }) => (
  <div className="blurb__title">
    {title}
  </div>
);

BlurbTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BlurbTitle;
