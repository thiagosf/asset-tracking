import React, { Component } from 'react'
import { AppLayout } from '../Layouts'
import logoSource from '../../assets/svg/logo.svg'
import { translate } from '../../locales'

class Landing extends Component {
  render () {
    return (
      <AppLayout>
        <div className="landing-page">
          <span></span>
          <div className="landing-box">
            <div className="landing-box__image">
              <img src={logoSource} />
            </div>
            <div className="landing-box__text">
              <span className="landing-box__text__small">{translate('landing.followEvolution1')}</span>
              <span className="landing-box__text__large">{translate('landing.followEvolution2')}</span>
              <span className="landing-box__text__small">{translate('landing.followEvolution3')}</span>
            </div>
          </div>
          <ul className="account-links">
            <li>
              <a href="#" className="account-links__link">{translate('accountLinks.login')}</a>
            </li>
            <li>
              <a href="#" className="account-links__link">{translate('accountLinks.createAccount')}</a>
            </li>
            <li>
              <a href="#" className="account-links__link">{translate('accountLinks.forgetPassword')}</a>
            </li>
          </ul>
        </div>
      </AppLayout>
    )
  };
}

export default Landing
