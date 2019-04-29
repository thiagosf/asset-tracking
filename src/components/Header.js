import React, { Component } from 'react'
import Logo from './Logo'

export default class Header extends Component {
  render () {
    return (
      <header className="main-header">
        <Logo />
      </header>
    )
  }
}
