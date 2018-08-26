import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Projects.scss';

import ProjectsTitle from './ProjectsTitle/ProjectsTitle';
import Project from '../Project/Project';

const Projects = ({ title, theme, projects }) => {
  const classes = classnames({
    'c-projects': true,
    [`c-projects--theme_${theme}`]: theme,
  });

  return (
    <div className={classes}>
      {title ? <ProjectsTitle title={title} /> : null}
      {projects.map(project => <Project key={project.title} project={project} theme={theme} />)}
    </div>
  );
};

Projects.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string,
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
};

Projects.defaultProps = {
  title: null,
  theme: null,
  projects: [],
};

export default Projects;
