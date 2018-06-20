import React from 'react';
import PropTypes from 'prop-types';

import './ProjectLink.scss';

const ProjectLink = ({ href, label, target }) => (
  <div className="project__link">
    <a href={href} target={target}>{label}</a>
  </div>
);

ProjectLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  target: PropTypes.string,
};

ProjectLink.defaultProps = {
  target: '_blank',
};

export default ProjectLink;
