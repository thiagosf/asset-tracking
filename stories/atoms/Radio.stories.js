import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, radios, boolean, number } from '@storybook/addon-knobs'
import { Radio } from '../../src/components/atoms'
import { decoratorContainer } from '../helpers'

const stories = storiesOf('atoms/Radio', module)
stories.addDecorator(decoratorContainer)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const disabled = boolean('disabled', false)

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

  return (
    <div>
      <Radio
        name='age'
        value='20'
        disabled={disabled}
        size={size}
        intent={intent}
      />
      <Radio
        name='age'
        value='21'
        disabled={disabled}
        size={size}
        intent={intent}
      />
    </div>
  )
})
