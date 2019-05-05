import React, { Component } from 'react'

class ButtonSpinner extends Component {
  static defaultProps = {
    disabled: false,
    block: false,
    small: false,
    type: 'button',
    onClick: () => {}
  };

  render () {
    return (
      <button
        className={this._getClasses()}
        disabled={this.props.disabled}
        type={this.props.type}
        onClick={this.props.onClick}
      >
        <span>{this.props.children}</span>
      </button>
    )
  };

  _getClasses = () => {
    let classes = ['button']
    if (this.props.disabled) {
      classes.push('button--spinner')
    }
    if (this.props.block) {
      classes.push('button--block')
    }
    if (this.props.small) {
      classes.push('button--small')
    }
    return classes.join(' ')
  };
}

export default ButtonSpinner
