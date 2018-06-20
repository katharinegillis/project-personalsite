import React from 'react';
import PropTypes from 'prop-types';

import './Skill.scss';
import SkillTitle from './SkillTitle/SkillTitle';

const Skill = ({ title, descriptor, percentage }) => (
  <div className="skill">
    <SkillTitle title={}/>
  </div>
)

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  descriptor: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default Skill;