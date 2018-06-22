import React from 'react';
import PropTypes from 'prop-types';

import './EducationItem.scss';
import EducationTitle from './EducationTitle/EducationTitle';
import EducationTimeframe from './EducationTimeframe/EducationTimeframe';
import EducationLocation from './EducationLocation/EducationLocation';

const EducationItem = ({ title, location, timeframe }) => (
  <div className="education__item">
    <EducationTitle title={title} />
    <EducationLocation location={location} />
    <EducationTimeframe timeframe={timeframe} />
  </div>
);

EducationItem.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  timeframe: PropTypes.string.isRequired,
};

export default EducationItem;
