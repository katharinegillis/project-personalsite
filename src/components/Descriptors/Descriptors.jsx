import React from 'react';
import PropTypes from 'prop-types';

import './descriptors.scss';

import DescriptorItem from './DescriptorItem/DescriptorItem';

const Descriptors = ({ descriptors }) => (
  <div className="descriptors">
    {descriptors.map(descriptor => <DescriptorItem descriptor={descriptor} key={descriptor} />)}
  </div>
);

Descriptors.propTypes = {
  descriptors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Descriptors;
