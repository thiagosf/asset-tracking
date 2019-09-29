import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, radios, boolean } from '@storybook/addon-knobs'
import { Button } from '../../src/components/atoms'
import { decoratorContainer } from '../helpers'

const stories = storiesOf('atoms/Button', module)
stories.addDecorator(decoratorContainer)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const spinner = boolean('spinner', false)
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
  const intent = radios('intent', intentOptions, 'info')

  return (
    <Button
      spinner={spinner}
      disabled={disabled}
      size={size}
      intent={intent}
    >
      Button
    </Button>
  )
})
