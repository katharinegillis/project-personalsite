import React from 'react';
import PropTypes from 'prop-types';

const ProjectTitle = ({ title }) => (
  <div className="project__title">
    {title}
  </div>
);

ProjectTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProjectTitle;
