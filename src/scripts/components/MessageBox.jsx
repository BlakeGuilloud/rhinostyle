/* eslint no-return-assign:0 */
import React from 'react';
import cx    from 'classnames';
import autosize from 'autosize';

class MessageBox extends React.Component {
  static displayName = 'RhinoMessageBox';

  static propTypes = {
    className:     React.PropTypes.string,
    label:         React.PropTypes.string,
    name:          React.PropTypes.string,
    onClick:       React.PropTypes.func,
    onChange:      React.PropTypes.func,
    onKeyPress:    React.PropTypes.func,
    placeholder:   React.PropTypes.string,
    required:      React.PropTypes.bool,
    maxHeight:     React.PropTypes.string,
    initialValue:  React.PropTypes.string,
    focus:         React.PropTypes.bool,
    rows:          React.PropTypes.number,
  };

  static defaultProps = {
    label:         '',
    name:          '',
    placeholder:   '',
    rows:          1,
    required:      false,
    maxHeight:     '20rem',
    focus:         false,
  };

  state = {
    value: '',
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue });
    }
  }

  componentDidMount() {
    autosize(this.rhinoTextArea);
    if (this.onResize) {
      this.rhinoTextArea.addEventListener('autosize:resized', this.onResize);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this._getValue(nextProps) !== this._getValue(this.props)) {
      this.dispatchEvent('autosize:update', true);
    }

    if (nextProps.initialValue !== this.props.initialValue) {
      this.setState({
        value: nextProps.initialValue,
      });
    }
  }

  componentDidUpdate() {
    if (this.props.focus) {
      this.rhinoTextArea.focus();
    }
  }

  componentWillUnmount() {
    if (this.onResize) {
      this.rhinoTextArea.removeEventListener('autosize:resized');
    }
    this.dispatchEvent('autosize:destroy');
  }


  dispatchEvent(EVENT_TYPE, defer) {
    const event = document.createEvent('Event');
    event.initEvent(EVENT_TYPE, true, false);
    const dispatch = () => this.rhinoTextArea.dispatchEvent(event);
    if (defer) {
      setTimeout(dispatch);
    } else {
      dispatch();
    }
  }

  _handleChange = (event) => {
    this.setState({ value: event.target.value });

    if (this.props.onChange && typeof (this.props.onChange === 'function')) {
      this.props.onChange(event.target.id, event.target.value);
    }
  }

  _handleClick = (event) => {
    if (this.props.onClick && typeof (this.props.onClick === 'function')) {
      this.props.onClick(event.target.id, event.target.value);
    }
  }

  _handleKeyPress = (event) => {
    if (this.props.onKeyPress && typeof (this.props.onKeyPress === 'function')) {
      this.props.onKeyPress(event);
    }
  }

  _getValue(props) {
    if (props) {
      if (props.valueLink) {
        return props.valueLink.value;
      }
      return props.value;
    }
    return false;
  }

  render() {
    const { required, rows, className, label, name, placeholder, maxHeight } = this.props;
    const textAreaClasses = cx('form__control', 'u-overflow-y-auto');
    const formGroupClasses = cx('form__group', className);
    const messageBoxStyle = {
      maxHeight,
    };

    const showLabel = () => {
      if (label) {
        return <label htmlFor={name}>{label} {required ? <span className="form__asterisk">*</span> : null}</label>;
      }

      return false;
    };
    return (
      <div className={formGroupClasses}>
        {showLabel()}
        <textarea rows={rows} placeholder={placeholder} className={textAreaClasses} style={messageBoxStyle} value={this.state.value} onKeyPress={this._handleKeyPress} onChange={this._handleChange} onClick={this._handleClick} ref={ref => this.rhinoTextArea = ref} />
      </div>
    );
  }

}

export default MessageBox;
