import React, { Component } from 'react'
import settings from '../../settings'
import logoSource from '../../assets/svg/logo.svg'

export default class Logo extends Component {
  static defaultProps = {
    onlyIcon: false
  };

  render () {
    const { onlyIcon } = this.props
    return (
      <div className="logo">
        <div className="logo__image">
          <img src={logoSource} alt={settings.title} />
        </div>
        {!onlyIcon &&
          <div className="logo__text">
            {settings.title}
          </div>
        }
      </div>
    )
  }
}
