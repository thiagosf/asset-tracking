import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  static propTypes = {
    size: PropTypes.string,
    intent: PropTypes.string
  };

  render () {
    const safeProps = this._safeProps()
    const className = this._getClasses()
    return (
      <div className={className}>
        <input
          {...safeProps}
          className='input-wrapper__input'
        />
      </div>
    )
  };

  _getClasses = () => {
    const {
      size,
      intent,
      className
    } = this.props
    let classes = ['input-wrapper']
    if (size) classes.push(`input-wrapper--${size}`)
    if (intent) classes.push(`input-wrapper--${intent}`)
    if (className) classes.push(className)
    return classes.join(' ')
  };

  _safeProps = () => {
    let safeProps = { ...this.props }
    delete safeProps.block
    delete safeProps.size
    delete safeProps.intent
    return safeProps
  };
}

export default Input
