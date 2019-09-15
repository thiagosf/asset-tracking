import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    spinner: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    size: PropTypes.string,
    intent: PropTypes.string
  };

  static defaultProps = {
    type: 'button',
    onClick: () => {}
  };

  render () {
    const {
      disabled,
      type,
      onClick
    } = this.props
    return (
      <button
        className={this._getClasses()}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        <span>{this.props.children}</span>
      </button>
    )
  };

  _getClasses = () => {
    const {
      spinner,
      block,
      size,
      intent
    } = this.props
    let classes = ['button']
    if (spinner) classes.push('button--spinner')
    if (block) classes.push('button--block')
    if (size) classes.push(`button--${size}`)
    if (intent) classes.push(`button--${intent}`)
    return classes.join(' ')
  };
}

export default Button
