import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../molecules'
import { links } from '../../utils'

export default class Header extends Component {
  render () {
    return (
      <header className="main-header">
        <Link to={links.get('home')}>
          <Logo />
        </Link>
      </header>
    )
  }
}
