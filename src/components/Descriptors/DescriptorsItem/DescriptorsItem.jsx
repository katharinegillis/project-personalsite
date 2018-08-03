import React from 'react';
import PropTypes from 'prop-types';

import './DescriptorsItem.scss';

const DescriptorsItem = ({ descriptor }) => (
  <li className="c-descriptors__item">
    {descriptor}
  </li>
);

DescriptorsItem.propTypes = {
  descriptor: PropTypes.string.isRequired,
};

export default DescriptorsItem;
