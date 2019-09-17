import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Radio extends Component {
  static propTypes = {
    size: PropTypes.string,
    intent: PropTypes.string
  };

  render () {
    const safeProps = this._safeProps()
    const className = this._getClasses()
    return (
      <div className={className}>
        <label className='radio-wrapper__label'>
          <input
            {...safeProps}
            type='radio'
            className='radio-wrapper__input'
          />
          <span className='radio-wrapper__check'>
            <span className='radio-wrapper__check__icon'></span>
          </span>
        </label>
      </div>
    )
  };

  _getClasses = () => {
    const {
      size,
      intent,
      className
    } = this.props
    let classes = ['radio-wrapper']
    if (size) classes.push(`radio-wrapper--${size}`)
    if (intent) classes.push(`radio-wrapper--${intent}`)
    if (className) classes.push(className)
    return classes.join(' ')
  };

  _safeProps = () => {
    let safeProps = { ...this.props }
    delete safeProps.size
    delete safeProps.intent
    return safeProps
  };
}

export default Radio
