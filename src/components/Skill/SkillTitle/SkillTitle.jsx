import React from 'react';
import PropTypes from 'prop-types';

const SkillTitle = ({ title }) => (
  <h3 className="skill__title">
    {title}
  </h3>
);

SkillTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SkillTitle;
