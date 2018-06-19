import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const GridContainer = ({ columns, offset, children }) => {
  const classes = classnames({
    col: true,
    [`col-${columns}`]: true,
    [`col-offset-${offset}`]: offset,
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

GridContainer.propTypes = {
  columns: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  offset: PropTypes.number,
};

GridContainer.defaultProps = {
  offset: null,
};

export default GridContainer;
