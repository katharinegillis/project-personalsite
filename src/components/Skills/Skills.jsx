import React from 'react';
import PropTypes from 'prop-types';

import SkillsTitle from './SkillsTitle/SkillsTitle';
import Skill from '../Skill/Skill';

const Skills = ({ title, skills }) => (
  <div className="skills">
    <SkillsTitle title={title} />
    {skills.map(skill => (
      <Skill
        title={skill.title}
        descriptor={skill.descriptor}
        percentage={skill.percentage}
        key={skill.title}
      />
    ))}
  </div>
);

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    descriptor: PropTypes.string,
    percentage: PropTypes.number,
  })),
};

Skills.defaultProps = {
  skills: [],
};

export default Skills;
