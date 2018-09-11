import React from 'react';
import PropTypes from 'prop-types';

import ProjectsTitle from './ProjectsTitle/ProjectsTitle';
import Project from '../Project/Project';

const Projects = ({ title, projects, fullWidth }) => {
  const classes = [
    'projects',
  ];

  if (fullWidth) {
    classes.push('projects--fullwidth');
  }

  return (
    <div className={classes.join(' ')}>
      {title ? <ProjectsTitle title={title} /> : null}
      {projects.map(project => <Project key={project.title} project={project} />)}
    </div>
  );
};

Projects.propTypes = {
  title: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string,
      target: PropTypes.string,
    }),
  })),
  fullWidth: PropTypes.bool,
};

Projects.defaultProps = {
  title: null,
  projects: [],
  fullWidth: false,
};

export default Projects;
