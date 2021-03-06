import React     from 'react';
import cx        from 'classnames';
import { Icon }  from '../components';

const Pill = (props) => {
  const { className, disabled, icon, onClick, label, type } = props;
  const classes = cx('pill', className, {
    'pill--disabled':   disabled,
    'pill--default': type === 'default',
    'pill--neutral': type === 'neutral',
  });

  return (
    /* eslint no-script-url:0 */
    <a href="javascript:void(0)" className={classes} onClick={onClick}>{icon ? (<Icon icon={icon} className="pill__icon" />) : null} {label}<span className="pill__close">&times;</span></a>
  );
};

Pill.displayName = 'RhinoPill';

Pill.propTypes = {
  className: React.PropTypes.string,
  disabled:  React.PropTypes.bool,
  icon:      React.PropTypes.string,
  onClick:   React.PropTypes.func.isRequired,
  label:     React.PropTypes.string.isRequired,
  type:      React.PropTypes.oneOf(['default', 'neutral']),
};

Pill.defaultProps = {
  onClick: () => {},
  type: 'default',
};

export default Pill;
