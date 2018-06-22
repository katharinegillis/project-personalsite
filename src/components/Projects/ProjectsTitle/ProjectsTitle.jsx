import React from 'react';
import PropTypes from 'prop-types';

import './ProjectsTitle.scss';

const ProjectsTitle = ({ title }) => (
  <div className="projects__title">
    {title}
  </div>
);

ProjectsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProjectsTitle;
