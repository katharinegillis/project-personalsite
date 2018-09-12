import React from 'react';
import PropTypes from 'prop-types';

const Descriptors = ({ descriptors }) => (
  <ul className="descriptors">
    {descriptors.map(descriptor => (
      <li key={descriptor} className="descriptors__item">
        {descriptor}
      </li>
    ))}
  </ul>
);

Descriptors.propTypes = {
  descriptors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Descriptors;
