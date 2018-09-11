import React from 'react';
import PropTypes from 'prop-types';

const EducationTimeframe = ({ timeframe }) => (
  <div className="education__timeframe">
    ({timeframe})
  </div>
);

EducationTimeframe.propTypes = {
  timeframe: PropTypes.string.isRequired,
};

export default EducationTimeframe;
