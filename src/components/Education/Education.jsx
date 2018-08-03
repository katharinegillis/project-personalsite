import React from 'react';
import PropTypes from 'prop-types';

import './Education.scss';
import EducationItem from './EducationItem/EducationItem';

const Education = ({ educationItems }) => (
  <div className="education">
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
