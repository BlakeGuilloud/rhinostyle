import React from 'react';
import cx    from 'classnames';

class ModalHeader extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:   React.PropTypes.node,
    className:  React.PropTypes.string,
  };

  render() {
    const { className } = this.props;

    const classes = cx('modal__header', className);

    return (
      <div>
        <div className={classes}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ModalHeader;
