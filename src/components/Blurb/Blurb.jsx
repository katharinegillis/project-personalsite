import React from 'react';
import PropTypes from 'prop-types';

import BlurbTitle from './BlurbTitle/BlurbTitle';
import BlurbText from './BlurbText/BlurbText';

const Blurb = ({
  title,
  text,
  children,
}) => (
  <div className="blurb">
    {title !== null ? <BlurbTitle title={title} /> : null}
    {text !== null ? <BlurbText text={text} /> : null}
    {children}
  </div>
);

Blurb.propTypes = {
  title: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Blurb.defaultProps = {
  title: null,
  text: [],
  children: null,
};

export default Blurb;
