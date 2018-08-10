import React from 'react';
import PropTypes from 'prop-types';

import './BlurbText.scss';

import utils from '../../../helpers/utils';

class BlurbText extends React.Component {
  componentWillMount() {
    this.paragraphs = this.props.text.map(paragraph => ({
      id: utils.generateId(),
      text: paragraph,
    }));
  }

  render() {
    return (
      <div className="c-blurb__text">
        {this.paragraphs.map(paragraph => <p key={paragraph.id}>{paragraph.text}</p>)}
      </div>
    );
  }
}

BlurbText.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlurbText;
