import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { translate } from '../../locales'
import { Icon, Button } from '../atoms'
import { FormControl } from '../molecules'

export default class NewAsset extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    brokers: PropTypes.arrayOf(PropTypes.object).isRequired,
    assetTypes: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  state = {
    model: {
      broker_id: null,
      broder: '',
      asset_type_id: '',
      name: '',
      description: '',
      yearly_profitability: '',
      date: new Date(),
      currency: 'BRL',
      total: 0,
      amount: 0
    },
    step: 1
  };

  render () {
    const { model } = this.state

    return (
      <div className="new-asset">
        <div className="new-asset__steps">
          <div className={this._stepClasses(1)}>
            <div className="new-asset__steps__step__title">
              <span className="new-asset__steps__step__title__number">1</span>
              <span className="new-asset__steps__step__title__text">{translate('newAsset.broker')}</span>
            </div>
            <div className="new-asset__steps__step__content">
              <div className="new-asset__steps__step__content__brokers">
                {this._getBrokers()}
              </div>
              {model.broker_id === '' &&
                <FormControl
                  label={translate('newAsset.newBroker')}
                  type='text'
                  value={model.broker}
                  onChange={value => this._onChange('broker', value)}
                  name='broker'
                />
              }
              <div className="new-asset__steps__step__content__actions">
                <Button
                  onClick={this._nextStep}
                  intent='info'
                  size='small'
                  disabled={!this._validStep(1)}
                >
                  <Icon name='arrow-next' />
                </Button>
              </div>
            </div>
          </div>

          <div className={this._stepClasses(2)}>
            <div className="new-asset__steps__step__title">
              <span className="new-asset__steps__step__title__number">2</span>
              <span className="new-asset__steps__step__title__text">{translate('newAsset.asset')}</span>
            </div>
            <div className="new-asset__steps__step__content">
              <FormControl
                label={translate('newAsset.name')}
                value={model.name}
                onChange={value => this._onChange('name', value)}
              />
              <FormControl
                label={translate('newAsset.description')}
                value={model.description}
                onChange={value => this._onChange('description', value)}
              />
              <FormControl
                label={translate('newAsset.yearlyProfitability')}
                value={model.yearly_profitability}
                onChange={value => this._onChange('yearly_profitability', value)}
              />
              <FormControl
                label={translate('newAsset.date')}
                value={model.date}
                type='calendar'
                onChange={value => this._onChange('date', value)}
              />
              <div className="new-asset__steps__step__content__actions">
                <Button
                  onClick={this._prevStep}
                  intent='info'
                  size='small'
                >
                  <Icon name='arrow-prev' />
                </Button>
                <Button
                  onClick={this._nextStep}
                  intent='info'
                  size='small'
                  disabled={!this._validStep(2)}
                >
                  <Icon name='arrow-next' />
                </Button>
              </div>
            </div>
          </div>

          <div className={this._stepClasses(3)}>
            <div className="new-asset__steps__step__title">
              <span className="new-asset__steps__step__title__number">3</span>
              <span className="new-asset__steps__step__title__text">{translate('newAsset.value')}</span>
            </div>
            <div className="new-asset__steps__step__content">
              <FormControl
                label={translate('newAsset.currency')}
                value={model.currency}
                onChange={value => this._onChange('currency', value)}
              />
              <FormControl
                label={translate('newAsset.total')}
                value={model.total}
                onChange={value => this._onChange('total', value)}
              />
              <FormControl
                label={translate('newAsset.amount')}
                value={model.amount}
                onChange={value => this._onChange('amount', value)}
              />
              <div className="new-asset__steps__step__content__actions">
                <Button
                  onClick={this._prevStep}
                  intent='info'
                  size='small'
                >
                  <Icon name='arrow-prev' />
                </Button>
                <Button
                  onClick={this._nextStep}
                  intent='info'
                  size='small'
                  disabled={!this._validStep(3)}
                >
                  <Icon name='arrow-next' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  _getBrokers = () => {
    const { model } = this.state
    const newBrokerItem = [{
      id: '',
      name: translate('newAsset.newBroker')
    }]
    return this.props.brokers
      .concat(newBrokerItem)
      .map((item, index) => {
        const selected = item.id === model.broker_id
        return (
          <FormControl
            key={index}
            intent='info'
            type='radio'
            name='broker_id'
            onChange={value => this._onChange('broker_id', item.id)}
            selected={selected}
            value={item.id}
            label={item.name}
          />
        )
      })
  };

  _onChange = (name, value) => {
    const model = {
      ...this.state.model,
      [name]: value
    }
    this.setState({ model })
  };

  _onSubmit = () => {
    this.props.onSubmit(this.model.data)
  };

  _stepClasses = stepItem => {
    const { step } = this.state
    let classes = ['new-asset__steps__step']
    if (step === stepItem) {
      classes.push('new-asset__steps__step--active')
    }
    return classes.join(' ')
  };

  _prevStep = () => {
    const { step } = this.state
    this.setState({ step: step - 1 })
  };

  _nextStep = () => {
    const { step } = this.state
    this.setState({ step: step + 1 })
  };

  _validStep = step => {
    const { model } = this.state
    switch (step) {
      case 1:
        return model.broker_id || model.broker
      case 2:
        return (
          model.name &&
          model.description &&
          model.yearly_profitability &&
          model.date
        )
    }
  };
}
