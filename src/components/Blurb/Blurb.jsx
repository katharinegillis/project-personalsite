import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Blurb.scss';

import BlurbTitle from './BlurbTitle/BlurbTitle';
import BlurbText from './BlurbText/BlurbText';

const Blurb = ({
  title,
  text,
  theme,
  children,
}) => {
  const classes = classnames({
    'c-blurb': true,
    [`c-blurb--theme_${theme}`]: theme,
  });

  return (
    <div className={classes}>
      {title !== null ? <BlurbTitle title={title} /> : null}
      {text !== null ? <BlurbText text={text} /> : null}
      {children}
    </div>
  );
};

Blurb.propTypes = {
  title: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Blurb.defaultProps = {
  title: null,
  text: [],
  theme: null,
  children: null,
};

export default Blurb;
