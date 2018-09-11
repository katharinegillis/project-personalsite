import React from 'react';
import PropTypes from 'prop-types';

const SkillsTitle = ({ title }) => (
  <h2 className="skills__title">
    {title}
  </h2>
);

SkillsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SkillsTitle;
