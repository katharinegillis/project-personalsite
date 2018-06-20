import React from 'react';
import PropTypes from 'prop-types';

import './SkillsTitle.scss';

const SkillsTitle = ({ title }) => (
  <div className="skills__title">
    {title}
  </div>
);

SkillsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SkillsTitle;