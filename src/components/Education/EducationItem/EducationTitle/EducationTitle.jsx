import React from 'react';
import PropTypes from 'prop-types';

const EducationTitle = ({ title }) => (
  <div className="education__title">
    {title}
  </div>
);

EducationTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EducationTitle;
