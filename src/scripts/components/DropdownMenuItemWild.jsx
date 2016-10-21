import React from 'react';
import cx from 'classnames';

class DropdownMenuItemWild extends React.Component {
  static displayName = 'RhinoDropdownMenuItemWild';

  static propTypes = {
    children:        React.PropTypes.node,
    className:       React.PropTypes.string,
    handleToggle:    React.PropTypes.func,
    triggerToggle:   React.PropTypes.bool,
  };

  static defaultProps = {
    triggerToggle:  false,
  };

  render() {
    const { children, className, handleToggle, triggerToggle } = this.props;
    const classes = cx('dropdown__menu__item-wild', className);

    return (
      <div className={classes}>
        {props.children}
      </div>
    );

  }
}

export default DropdownMenuItemWild;
