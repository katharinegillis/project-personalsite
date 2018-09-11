import React from 'react';
import PropTypes from 'prop-types';

import DescriptorsItem from './DescriptorsItem/DescriptorsItem';

const Descriptors = ({ descriptors }) => (
  <ul className="descriptors">
    {descriptors.map(descriptor => <DescriptorsItem descriptor={descriptor} key={descriptor} />)}
  </ul>
);

Descriptors.propTypes = {
  descriptors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Descriptors;
