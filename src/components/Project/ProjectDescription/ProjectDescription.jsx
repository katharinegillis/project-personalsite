import React from 'react';
import PropTypes from 'prop-types';

const ProjectDescription = ({ description }) => (
  <div className="project__description">
    {description}
  </div>
);

ProjectDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ProjectDescription;
