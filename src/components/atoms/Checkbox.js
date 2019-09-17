import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends Component {
  static propTypes = {
    size: PropTypes.string,
    intent: PropTypes.string
  };

  render () {
    const safeProps = this._safeProps()
    const className = this._getClasses()
    return (
      <div className={className}>
        <label className='checkbox-wrapper__label'>
          <input
            {...safeProps}
            type='checkbox'
            className='checkbox-wrapper__input'
          />
          <span className='checkbox-wrapper__check'>
            <span className='checkbox-wrapper__check__icon'></span>
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
    let classes = ['checkbox-wrapper']
    if (size) classes.push(`checkbox-wrapper--${size}`)
    if (intent) classes.push(`checkbox-wrapper--${intent}`)
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

export default Checkbox
