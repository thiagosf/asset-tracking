import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { Asset } from '../../src/components/organisms'

const stories = storiesOf('molecules/Asset', module)

stories.addDecorator(withKnobs)

stories.add('default', () => {
  const name = text('name', 'Tesouro IPCA +2045')
  const broker = text('broker', 'Easynvest')
  const variation1 = number('variation1', 3.2)
  const variation2 = number('variation2', 2.9)
  const variation3 = number('variation3', 4.9)
  const variations = [{
    date: '2019-03-01',
    variation: variation1
  }, {
    date: '2019-04-01',
    variation: variation2
  }, {
    date: '2019-05-01',
    variation: variation3
  }]
  const amount = number('amount', 12102.54)
  const total = number('total', 12102.54)
  const currency = text('currency', 'BRL')
  const age = number('age (in days)', 365)
  const annualProfitability = number('annual profitability', 4.4)
  const asset = {
    name,
    broker,
    variations,
    amount,
    total,
    age,
    annual_profitability: annualProfitability
  }
  return (
    <Asset
      asset={asset}
    />
  )
})
