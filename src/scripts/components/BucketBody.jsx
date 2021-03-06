import React from 'react';
import cx    from 'classnames';

const BucketBody = (props) => {
  const { className } = props;
  const classes = cx('bucket__body', className);

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

BucketBody.displayName = 'RhinoBucketBody';

BucketBody.propTypes = {
  children:  React.PropTypes.node,
  className: React.PropTypes.string,
};

export default BucketBody;
