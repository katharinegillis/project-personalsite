import React from 'react';
import PropTypes from 'prop-types';

import './Descriptors.scss';

import DescriptorsItem from './DescriptorsItem/DescriptorsItem';

const Descriptors = ({ descriptors }) => (
  <ul className="c-descriptors">
    {descriptors.map(descriptor => <DescriptorsItem descriptor={descriptor} key={descriptor} />)}
  </ul>
);

Descriptors.propTypes = {
  descriptors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Descriptors;
