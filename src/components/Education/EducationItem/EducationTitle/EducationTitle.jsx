import React from 'react';
import PropTypes from 'prop-types';

const EducationTitle = ({ title }) => (
  <h3 className="education__title">
    <i className="material-icons">local_library</i>
    {title}
  </h3>
);

EducationTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EducationTitle;
