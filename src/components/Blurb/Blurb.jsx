import React from 'react';
import PropTypes from 'prop-types';

import './blurb.scss';

import BlurbTitle from './BlurbTitle/BlurbTitle';
import BlurbText from './BlurbText/BlurbText';

const Blurb = ({ title, text }) => (
  <div className="blurb">
    <BlurbTitle title={title} />
    <BlurbText text={text} />
  </div>
);

Blurb.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Blurb;
