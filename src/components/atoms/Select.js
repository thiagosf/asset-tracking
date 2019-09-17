import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Select extends Component {
  static propTypes = {
    size: PropTypes.string,
    intent: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render () {
    const safeProps = this._safeProps()
    const className = this._getClasses()
    return (
      <div className={className}>
        <select
          {...safeProps}
          className='input-wrapper__input select-wrapper__select'
        >
          {this._getOptions()}
        </select>
      </div>
    )
  };

  _getClasses = () => {
    const {
      size,
      intent,
      className
    } = this.props
    let classes = ['input-wrapper', 'select-wrapper']
    if (size) classes.push(`input-wrapper--${size}`)
    if (intent) classes.push(`input-wrapper--${intent}`)
    if (className) classes.push(className)
    return classes.join(' ')
  };

  _safeProps = () => {
    let safeProps = { ...this.props }
    delete safeProps.size
    delete safeProps.intent
    delete safeProps.options
    return safeProps
  };

  _getOptions = () => {
    return this.props.options.map(item => {
      return <option value={item.value}>{item.label}</option>
    })
  };
}

export default Select
