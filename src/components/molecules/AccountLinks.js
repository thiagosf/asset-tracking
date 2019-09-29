import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { translate } from '../../locales'
// import { links } from '../../utils'

class AccountLinks extends Component {
  render () {
    return false
  }

  // static defaultProps = {
  //   login: true,
  //   createAccount: true,
  //   forgetPassword: true
  // };

  // render () {
  //   const list = this._getLinks().map((link, index) => (
  //     <li key={index}>
  //       <Link to={links.get(link.name)} className="account-links__link">{translate(link.label)}</Link>
  //     </li>
  //   ))
  //   return (
  //     <ul className="account-links">
  //       {list}
  //     </ul>
  //   )
  // };

  // _getLinks = () => {
  //   const links = [{
  //     label: 'accountLinks.login',
  //     name: 'login'
  //   }, {
  //     label: 'accountLinks.createAccount',
  //     name: 'createAccount'
  //   }, {
  //     label: 'accountLinks.forgetPassword',
  //     name: 'forgetPassword'
  //   }]
  //   let enableds = []
  //   if (this.props.login) enableds.push('login')
  //   if (this.props.createAccount) enableds.push('createAccount')
  //   if (this.props.forgetPassword) enableds.push('forgetPassword')
  //   return links.filter(link => enableds.includes(link.name))
  // };
}

export default AccountLinks
