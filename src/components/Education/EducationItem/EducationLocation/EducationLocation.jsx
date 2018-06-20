import React from 'react';
import PropTypes from 'prop-types';

import './EducationLocation.scss';

const EducationLocation = ({ location }) => (
  <div className="education__location">
    {location}
  </div>
);

EducationLocation.propTypes = {
  location: PropTypes.string.isRequired,
};

export default EducationLocation;