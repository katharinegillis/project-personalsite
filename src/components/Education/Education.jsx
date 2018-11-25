import React from 'react';
import PropTypes from 'prop-types';

const Education = ({ educationItems }) => (
  <div className="education">
    <h2>Education</h2>
    {educationItems.map(item => (
      <div key={item.title} className="education__item">
        <h3 className="education__title">
          <i className="material-icons">local_library</i>
          {item.title}
        </h3>
        <h4 className="education__location">
          {item.location}
        </h4>
        <div className="education__timeframe">
          ({item.timeframe})
        </div>
      </div>
    ))}
  </div>
);

Education.propTypes = {
  educationItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    timeframe: PropTypes.string,
  })),
};

Education.defaultProps = {
  educationItems: [],
};

export default Education;
