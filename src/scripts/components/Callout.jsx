import React      from 'react';
import classNames from 'classnames';

const Callout = React.createClass({
  displayName: 'RhinoCallout',

  propTypes: {
    body: React.PropTypes.string.isRequired,
    head: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['danger', 'default', 'info'])
  },

  getDefaultProps() {
    return {
      type: 'default'
    };
  },

  render() {
    const { body, head, type } = this.props;
    const cx = classNames('callout', {
      'callout--danger':  type==='danger',
      'callout--default': type==='default',
      'callout--info':    type==='info'
    });

    return (
      <div className={cx}>
        <div className="callout__heading">{head}</div>
        <div className="callout__copy">{body}</div>
      </div>
    );
  }
});

export default Callout;