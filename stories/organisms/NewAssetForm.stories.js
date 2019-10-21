import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { NewAssetForm } from '../../src/components/organisms'
import { decoratorContainer } from '../helpers'

const stories = storiesOf('organisms/NewAssetForm', module)

stories.addDecorator(decoratorContainer)
stories.addDecorator(withKnobs)

stories.add('default', () => {
  const brokers = [{
    id: 1,
    name: 'Itaú'
  }, {
    id: 2,
    name: 'Easynvest'
  }, {
    id: 3,
    name: 'Clear'
  }]
  const assetTypes = [{
    id: 1,
    name: 'Ação'
  }, {
    id: 2,
    name: 'Fundo Imobiliário'
  }, {
    id: 3,
    name: 'Outro'
  }]
  return (
    <NewAssetForm
      brokers={brokers}
      assetTypes={assetTypes}
      onSubmit={data => console.log(data)}
    />
  )
})
