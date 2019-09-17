import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, radios, boolean } from '@storybook/addon-knobs'
import { Select } from '../../src/components/atoms'
import { decoratorContainer } from '../helpers'

const stories = storiesOf('atoms/Select', module)
stories.addDecorator(decoratorContainer)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const disabled = boolean('disabled')

  const sizeOptions = {
    Small: 'small',
    Normal: 'normal',
    Large: 'large'
  }
  const size = radios('size', sizeOptions, 'normal')

  const intentOptions = {
    Default: 'default',
    Primary: 'primary',
    Danger: 'danger',
    Info: 'info',
    Warning: 'warning',
    Success: 'success'
  }
  const intent = radios('intent', intentOptions, 'default')
  const options = [{
    value: 'one',
    label: 'One'
  }, {
    value: 'two',
    label: 'Two'
  }, {
    value: 'three',
    label: 'Three'
  }]

  return (
    <Select
      disabled={disabled}
      size={size}
      intent={intent}
      options={options}
    />
  )
})
