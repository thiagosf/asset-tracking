import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, radios, boolean } from '@storybook/addon-knobs'
import { Input } from '../../src/components/atoms'
import { decoratorContainer } from '../helpers'

const stories = storiesOf('atoms/Input', module)
stories.addDecorator(decoratorContainer)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const disabled = boolean('disabled', false)
  const readonly = boolean('readonly', false)

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
    <Input
      disabled={disabled}
      readOnly={readonly}
      size={size}
      intent={intent}
    />
  )
})
