import React from 'react';
import PropTypes from 'prop-types';

import utils from '../../helpers/utils';

class Blurb extends React.Component {
  componentWillMount() {
    this.paragraphs = this.props.text.map(paragraph => ({
      id: utils.generateId(),
      text: paragraph,
    }));
  }

  render() {
    return (
      <div className="blurb">
        {this.props.title !== null ? (
          <div className="blurb__title">
            {this.props.title}
          </div>
        ) : null}
        {this.props.text !== null ? (
          <div className="blurb__text">
            {this.paragraphs.map(paragraph => <p key={paragraph.id}>{paragraph.text}</p>)}
          </div>
        ) : null}
        {this.props.children}
      </div>
    );
  }
}

Blurb.propTypes = {
  title: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Blurb.defaultProps = {
  title: null,
  text: [],
  children: null,
};

export default Blurb;
