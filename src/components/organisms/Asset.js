import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Asset extends Component {
  static propTypes = {
    asset: PropTypes.object.isRequired
  };

  render () {
    const { asset } = this.props
    return (
      <div className="asset">
        <header className="asset__header">
          <div className="asset__name_and_age">
            <div className="asset__name">
              {asset.name}
            </div>
            <div className="asset__age">
              {asset.age}
            </div>
          </div>
          <div className="asset__broker">
            {asset.broker}
          </div>
        </header>
        <div className="asset__amount">
          {asset.amount}
        </div>
        <div className="asset__total">
          {asset.total}
        </div>
        <div className="asset__currency">
          {asset.currency}
        </div>
      </div>
    )
  };
}
