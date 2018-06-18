import React from 'react';
import PropTypes from 'prop-types';

import './descriptoritem.scss';

const DescriptorItem = ({ descriptor }) => (
  <div className="descriptor__item">
    {descriptor}
  </div>
);

DescriptorItem.propTypes = {
  descriptor: PropTypes.string.isRequired,
};

export default DescriptorItem;
