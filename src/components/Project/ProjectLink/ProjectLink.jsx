import React from 'react';
import PropTypes from 'prop-types';

const ProjectLink = ({ href, label, target }) => {
  let handleClick = () => { };

  if (href === '#') {
    handleClick = (event) => {
      event.preventDefault();
      return false;
    };
  }

  return (
    <div className="project__link">
      <a href={href} target={target} onClick={handleClick}>
        <i className="material-icons">launch</i>
        {label}
      </a>
    </div>
  );
};

ProjectLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  target: PropTypes.string,
};

ProjectLink.defaultProps = {
  target: '_blank',
};

export default ProjectLink;
