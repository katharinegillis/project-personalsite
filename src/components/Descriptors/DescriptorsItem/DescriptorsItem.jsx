import React from 'react';
import PropTypes from 'prop-types';

import './DescriptorsItem.scss';

const DescriptorsItem = ({ descriptor }) => (
  <div className="descriptors__item">
    {descriptor}
  </div>
);

DescriptorsItem.propTypes = {
  descriptor: PropTypes.string.isRequired,
};

export default DescriptorsItem;
