import React from 'react';
import PropTypes from 'prop-types';

const DescriptorsItem = ({ descriptor }) => (
  <li className="descriptors__item">
    {descriptor}
  </li>
);

DescriptorsItem.propTypes = {
  descriptor: PropTypes.string.isRequired,
};

export default DescriptorsItem;
