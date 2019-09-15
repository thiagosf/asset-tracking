import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Link extends Component {
  static propTypes = {
    to: PropTypes.string,
    button: PropTypes.boolean,
    small: PropTypes.boolean,
    large: PropTypes.boolean,
  };

  static defaultProps = {
    to: '#'
  };

  render () {
    const {
      to,
      button,
      small,
      large
    } = this.props
    let classes = ['link']
    if (button) classes.push('link--button')
    if (small) classes.push('link--small')
    if (large) classes.push('link--large')
    return (
      <a
        href={to}
        className={classes.join(' ')}
      >{this.props.children}</a>
    )
  };
}

export default Link
