import React from 'react';
import PropTypes from 'prop-types';

import SkillTitle from './SkillTitle/SkillTitle';
import SkillDescriptor from './SkillDescriptor/SkillDescriptor';
import SkillBar from './SkillBar/SkillBar';

const Skill = ({ title, descriptor, percentage }) => (
  <div className="skill">
    <SkillTitle title={title} />
    <SkillDescriptor descriptor={descriptor} />
    <SkillBar percentage={percentage} />
  </div>
);

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  descriptor: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Skill;
