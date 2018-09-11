import React from 'react';
import PropTypes from 'prop-types';

import EducationItem from './EducationItem/EducationItem';

const Education = ({ educationItems }) => (
  <div className="education">
    <h2>Education</h2>
    {educationItems.map(item => (
      <EducationItem
        title={item.title}
        location={item.location}
        timeframe={item.timeframe}
        key={item.title}
      />
    ))}
  </div>
);

Education.propTypes = {
  educationItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    timeframe: PropTypes.string,
  })),
};

Education.defaultProps = {
  educationItems: [],
};

export default Education;
