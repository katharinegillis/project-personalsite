import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Project.scss';
import ProjectTitle from './ProjectTitle/ProjectTitle';
import ProjectImage from './ProjectImage/ProjectImage';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectLink from './ProjectLink/ProjectLink';

const Project = ({ theme, project }) => {
  const classes = classnames({
    'c-project': true,
    [`c-project--theme_${theme}`]: theme,
  });

  return (
    <div className={classes}>
      <ProjectImage src={project.image} />
      <ProjectTitle title={project.title} />
      <ProjectDescription description={project.description} />
      <ProjectLink href={project.link.href} label={project.link.label} />
    </div>
  );
};

Project.propTypes = {
  theme: PropTypes.string,
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

Project.defaultProps = {
  theme: null,
};

export default Project;
