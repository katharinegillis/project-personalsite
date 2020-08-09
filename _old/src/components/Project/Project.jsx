import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => {
  let handleClick = () => { };

  if (project.link.href === '#') {
    handleClick = (event) => {
      event.preventDefault();
      return false;
    };
  }

  return (
    <div className="project">
      <div className="project__image" style={{ backgroundImage: `url('${project.image}')` }} />
      <div className="project__content">
        <h3 className="project__title">
          {project.title}
        </h3>
        <div className="project__description">
          {project.description}
        </div>
        <div className="project__link">
          <a href={project.link.href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <i className="material-icons">launch</i>
            {project.link.label}
          </a>
        </div>
      </div>
    </div>
  );
};

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
