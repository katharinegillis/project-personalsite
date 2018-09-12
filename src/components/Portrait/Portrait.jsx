import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Portrait = ({ image, addClasses }) => {
  const classes = classnames('portrait', addClasses);

  return (
    <div className={classes}>
      <img src={image} alt="" />
    </div>
  );
};

Portrait.propTypes = {
  image: PropTypes.string.isRequired,
  addClasses: PropTypes.arrayOf(PropTypes.string),
};

Portrait.defaultProps = {
  addClasses: [],
};

export default Portrait;
