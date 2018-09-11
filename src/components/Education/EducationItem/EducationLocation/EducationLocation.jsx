import React from 'react';
import PropTypes from 'prop-types';

const EducationLocation = ({ location }) => (
  <h4 className="education__location">
    {location}
  </h4>
);

EducationLocation.propTypes = {
  location: PropTypes.string.isRequired,
};

export default EducationLocation;
