import React from 'react';
import PropTypes from 'prop-types';

import './SkillDescriptor.scss';

const SkillDescriptor = ({ descriptor }) => (
  <div className="skill__descriptor">
    {descriptor}
  </div>
);

SkillDescriptor.propTypes = {
  descriptor: PropTypes.string.isRequired,
};

export default SkillDescriptor;