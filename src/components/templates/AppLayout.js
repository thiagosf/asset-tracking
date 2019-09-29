import React, { Component } from 'react'
// import { Header } from '../organisms'

export default class AppLayout extends Component {
  render () {
    return (
      <div className="app-layout">
        <div className="app-layout__content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
