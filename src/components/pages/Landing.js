import React, { Component } from 'react'
import { AppLayout } from '../templates'
import { Transition } from '../atoms'
import { AccountLinks } from '../molecules'
import logoSource from '../../assets/svg/logo.svg'
import { translate } from '../../locales'
import settings from '../../settings'

class Landing extends Component {
  render () {
    return (
      <AppLayout>
        <Transition type='fade'>
          <div className="landing-page">
            <span></span>
            <div className="landing-box">
              <div className="landing-box__image">
                <img src={logoSource} alt={settings.title} />
              </div>
              <div className="landing-box__text">
                <span className="landing-box__text__small">{translate('landing.followEvolution1')}</span>
                <span className="landing-box__text__large">{translate('landing.followEvolution2')}</span>
                <span className="landing-box__text__small">{translate('landing.followEvolution3')}</span>
              </div>
            </div>
            <AccountLinks />
          </div>
        </Transition>
      </AppLayout>
    )
  };
}

export default Landing
