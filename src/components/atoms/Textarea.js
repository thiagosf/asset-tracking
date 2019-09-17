import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Textarea extends Component {
  static propTypes = {
    size: PropTypes.string,
    intent: PropTypes.string
  };

  render () {
    const safeProps = this._safeProps()
    const className = this._getClasses()
    return (
      <div className={className}>
        <textarea
          {...safeProps}
          className='input-wrapper__input textarea-wrapper__textarea'
        ></textarea>
      </div>
    )
  };

  _getClasses = () => {
    const {
      size,
      intent,
      className
    } = this.props
    let classes = ['input-wrapper', 'textarea-wrapper']
    if (size) classes.push(`textarea-wrapper--${size}`)
    if (intent) classes.push(`input-wrapper--${intent}`)
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

export default Textarea
