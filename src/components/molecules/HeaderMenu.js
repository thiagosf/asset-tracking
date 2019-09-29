import React, { Component } from 'react'
import { Icon } from '../atoms'

export default class HeaderMenu extends Component {
  state = {
    opened: false
  };

  render () {
    const classes = this._getClasses()
    return (
      <div className={classes}>
        <div
          className="header-menu__open-nav"
          onClick={this._toggleNav}
        >
          <Icon name='menu' />
        </div>
        <ul className="header-menu__nav">
          <li className="header-menu__nav__item">
            <a className="header-menu__nav__item__link">
              Link
            </a>
          </li>
          <li className="header-menu__nav__item">
            <a className="header-menu__nav__item__link">
              Link
            </a>
          </li>
          <li className="header-menu__nav__item">
            <a className="header-menu__nav__item__link">
              Link
            </a>
          </li>
          <li className="header-menu__nav__item">
            <a className="header-menu__nav__item__link">
              Link
            </a>
          </li>
        </ul>
      </div>
    )
  };

  _getClasses = () => {
    let classes = ['header-menu']
    if (this.state.opened) {
      classes.push('header-menu--is-opened')
    }
    return classes.join(' ')
  };

  _toggleNav = () => {
    this.setState({ opened: !this.state.opened })
  };
}
