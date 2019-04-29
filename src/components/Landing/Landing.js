import React, { Component } from 'react'
import { AppLayout } from '../Layouts'

class Landing extends Component {
  render () {
    return (
      <AppLayout>
        <div className="landing">
          <div className="landing__image"></div>
          <div className="landing__text">
            <span className="landing__text__small">Acompanhe a evolução dos seus</span>
            <span className="landing__text__large">investimentos.</span>
            <span className="landing__text__small">De forma muito simples.</span>
          </div>
        </div>
      </AppLayout>
    )
  };
}

export default Landing
