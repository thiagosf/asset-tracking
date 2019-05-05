import React, { Component } from 'react'
import settings from '../settings'
import logoSource from '../assets/svg/logo.svg'

export default class Logo extends Component {
  render () {
    return (
      <div className="logo">
        <div className="logo__image">
          <img src={logoSource} alt={settings.title} />
        </div>
        <div className="logo__text">
          {settings.title}
        </div>
      </div>
    )
  }
}
