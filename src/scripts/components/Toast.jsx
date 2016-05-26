import React      from 'react';
import classNames from 'classnames';
import GSAP       from 'react-gsap-enhancer';

const Toast = React.createClass({
  displayName: 'RhinoToast',

  propTypes: {
    body:        React.PropTypes.string.isRequired,
    onDismiss:   React.PropTypes.func,
    type:        React.PropTypes.oneOf(['danger', 'default', 'secondary'])
  },

  getDefaultProps() {
    return {
      onDismiss: () => {},
      type:      'default'
    };
  },

  render() {
    const { body, onDismiss, type } = this.props;
    const cx = classNames('notify', {
      'notify--danger':    type==='danger',
      'notify--default':   type==='default',
      'notify--secondary': type==='secondary'
    });

    return (
      <div className={cx}>
        <button type="button" onClick={onDismiss} className="notify__close" data-dismiss="notify" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {body}
      </div>
    );
  }
});

export default GSAP()(Toast);