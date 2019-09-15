import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'

class Icon extends Component {
  static propTypes = {
    name: PropTypes.string,
    size: PropTypes.string,
    intent: PropTypes.bool
  };

  render () {
    const { size, intent } = this.props
    const file = this._getFile()
    if (!file) return false

    let classes = ['icon']
    if (size !== 'normal') classes.push(`icon--${size}`)
    if (intent) classes.push(`icon--${intent}`)

    return (
      <i className={classes.join(' ')}>
        <ReactSVG
          src={file}
          wrapper='span'
        />
      </i>
    )
  };

  _getFile = () => {
    const { name } = this.props
    return require(`../../assets/svg/icons/${name}.svg`)
  };
}

export default Icon
