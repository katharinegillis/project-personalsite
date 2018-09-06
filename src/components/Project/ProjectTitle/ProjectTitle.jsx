import React from 'react';
import PropTypes from 'prop-types';

const ProjectTitle = ({ title }) => (
  <h3 className="project__title">
    {title}
  </h3>
);

ProjectTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProjectTitle;
