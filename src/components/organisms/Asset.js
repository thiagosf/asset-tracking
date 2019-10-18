import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../atoms'
import { LineChart } from '../molecules'
import { date, money, number } from '../../utils'

export default class Asset extends Component {
  static propTypes = {
    asset: PropTypes.object.isRequired
  };

  render () {
    const { asset } = this.props
    const lastVariation = this._getLastVariation()
    const classes = this._getClasses()
    const chartData = this._getChartData()

    return (
      <div className={classes}>
        <header className="asset__header">
          <div className="asset__name_and_age">
            <div className="asset__name">
              {asset.name}
            </div>
            <div className="asset__age" title={date.formatDatetime(asset.date)}>
              {date.timeago(asset.date)}
            </div>
          </div>
          <div className="asset__broker">
            {asset.broker}
          </div>
        </header>
        <div className="asset__total-and-last-variation">
          <div className="asset__total">
            {money.format(asset.total)}
          </div>
          <div className="asset__last-variation">
            {number.percentage(lastVariation)}
          </div>
        </div>
        {asset.amount !== asset.total &&
          <div className="asset__amount-and-currency">
            <span className="asset__amount">{asset.amount}</span> <span className="asset__currency">{asset.currency}</span>
          </div>
        }
        <div className="asset__chart">
          <LineChart data={chartData} />
        </div>
        <div className="asset__actions">
          <Button
            intent='primary'
            size='small'
            onPress={() => console.log('timeline')}
          >Timeline</Button>
          <Button
            intent='success'
            size='small'
            onPress={() => console.log('new info')}
          >New info</Button>
          <Button
            intent='danger'
            size='small'
            onPress={() => console.log('danger')}
          >Remove</Button>
        </div>
      </div>
    )
  };

  _getLastVariation = () => {
    const { variations } = this.props.asset
    if (variations.length > 0) {
      const lastIndex = variations.length - 1
      return this._formatVariation(variations[lastIndex].variation)
    }
    return '?'
  };

  _getClasses = () => {
    let classes = ['asset']
    const { variations } = this.props.asset
    if (variations.length > 0) {
      const lastIndex = variations.length - 1
      const lastVariation = variations[lastIndex].variation
      if (lastVariation > 0) {
        classes.push('asset--positive')
      } else if (lastVariation < 0) {
        classes.push('asset--negative')
      }
    }
    return classes.join(' ')
  };

  _getChartData = () => {
    const { variations } = this.props.asset
    let labels = []
    let values = []
    if (Array.isArray(variations)) {
      variations.forEach(item => {
        const label = date.formatToChart(item.date)
        labels.push(label)
        values.push(this._formatVariation(item.variation))
      })
    }
    return { labels, values }
  };

  _formatVariation = value => {
    return +(+value).toFixed(2)
  }
}
