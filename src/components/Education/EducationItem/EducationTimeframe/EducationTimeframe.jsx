import React from 'react';
import PropTypes from 'prop-types';

import './EducationTimeframe.scss';

const EducationTimeframe = ({ timeframe }) => (
  <div className="education__timeframe">
    {timeframe}
  </div>
);

EducationTimeframe.propTypes = {
  timeframe: PropTypes.string.isRequired,
};

export default EducationTimeframe;