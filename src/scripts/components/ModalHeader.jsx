import React                    from 'react';
import cx                       from 'classnames';
import { Close, Icon, ModalSystem }    from '../components';


class ModalHeader extends React.Component {
  static displayName = 'RhinoModalHeader';

  static propTypes = {
    children:       React.PropTypes.node,
    className:      React.PropTypes.string,
    dismissable:    React.PropTypes.bool,
    icon:           React.PropTypes.string,
    iconClassName:  React.PropTypes.string,
    title:          React.PropTypes.string,
  }

  static defaultProps = {
    dismissable: true,
  }

  isDismissable = () => {
    let returnVal = null;
    if (this.props.dismissable) {
      returnVal = <button onClick={this.closeModal} type="button" className="modal__header__close" aria-label="Close"><Icon icon="close" /></button>;
    }
    return returnVal;
  }

  closeModal = () => {
    ModalSystem.removeModal();
  }

  render() {
    const { className, dismissable, icon, iconClassName, title } = this.props;
    const classes = cx('modal__header', className);
    const iconClasses = cx('modal__header__title__icon', iconClassName);

    return (
      <div className={classes}>
        <h4 className="modal__header__title">
          {icon ? (<Icon icon={icon} className={iconClasses} />) : null}
          <span className="u-text-overflow">
            {title}
          </span>
        </h4>
        {dismissable ? (<Close onClick={this.closeModal} className="modal__header__close" />) : null}
      </div>
    );
  }
}

export default ModalHeader;