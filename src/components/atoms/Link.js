import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Link extends Component {
  static propTypes = {
    to: PropTypes.string,
    button: PropTypes.boolean,
    size: PropTypes.string
  };

  static defaultProps = {
    to: '#'
  };

  render () {
    const {
      to,
      button,
      size
    } = this.props
    let classes = ['link']
    if (button) classes.push('link--button')
    if (size) classes.push(`link--${size}`)
    const safeProps = this._safeProps()
    return (
      <a
        {...safeProps}
        href={to}
        className={classes.join(' ')}
      >{this.props.children}</a>
    )
  };

  _safeProps = () => {
    let safeProps = { ...this.props }
    delete safeProps.to
    delete safeProps.button
    delete safeProps.size
    return safeProps
  };
}

export default Link
