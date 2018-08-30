import React from 'react';
import PropTypes from 'prop-types';

import ProjectTitle from './ProjectTitle/ProjectTitle';
import ProjectImage from './ProjectImage/ProjectImage';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectLink from './ProjectLink/ProjectLink';

const Project = ({ project }) => (
  <div className="project">
    <ProjectImage src={project.image} />
    <ProjectTitle title={project.title} />
    <ProjectDescription description={project.description} />
    <ProjectLink href={project.link.href} label={project.link.label} />
  </div>
);

Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string,
    }),
  }).isRequired,
};

export default Project;
