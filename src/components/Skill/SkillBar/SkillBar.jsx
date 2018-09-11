import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ percentage }) => (
  <div className="skill__bar">
    <div style={{ width: `${percentage}%` }}>&nbsp;</div>
  </div>
);

SkillBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default SkillBar;
