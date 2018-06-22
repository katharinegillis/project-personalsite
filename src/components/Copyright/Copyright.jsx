import React from 'react';
import PropTypes from 'prop-types';

import './Copyright.scss';

const Copyright = ({ author, startYear }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      &copy; {startYear}{currentYear > startYear ? `- ${currentYear}` : ''}, {author}
    </div>
  );
};

Copyright.propTypes = {
  author: PropTypes.string.isRequired,
  startYear: PropTypes.number.isRequired,
};

export default Copyright;
