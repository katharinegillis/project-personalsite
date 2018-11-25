import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ title, descriptor, percentage }) => (
  <div className="skill">
    <h3 className="skill__title">
      {title}
    </h3>
    <div className="skill__descriptor">
      {descriptor}
    </div>
    <div className="skill__bar">
      <div style={{ width: `${percentage}%` }}>&nbsp;</div>
    </div>
  </div>
);

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  descriptor: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Skill;
