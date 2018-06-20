import React from 'react';
import PropTypes from 'prop-types';

import './SkillBar.scss';

const SkillBar = ({ percentage }) => (
  <div className="skill__bar">
    {percentage}
  </div>
);

SkillBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default SkillBar;