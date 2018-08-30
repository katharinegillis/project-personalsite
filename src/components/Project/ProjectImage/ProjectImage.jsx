import React from 'react';
import PropTypes from 'prop-types';

const ProjectImage = ({ src }) => (
  <div className="project__image">
    <img src={src} alt="" />
  </div>
);

ProjectImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ProjectImage;
