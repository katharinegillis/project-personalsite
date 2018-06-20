import React from 'react';
import PropTypes from 'prop-types';

import './SkillTitle.scss';

const SkillTitle = ({ title }) => (
  <div className="skill__title">
    {title}
  </div>
);

SkillTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SkillTitle;