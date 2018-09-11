import React from 'react';
import PropTypes from 'prop-types';

const ProjectImage = ({ src }) => (
  <div className="project__image" style={{ backgroundImage: `url('${src}')` }} />
);

ProjectImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ProjectImage;
