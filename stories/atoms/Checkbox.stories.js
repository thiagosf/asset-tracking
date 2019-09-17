import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, radios, boolean, number } from '@storybook/addon-knobs'
import { Checkbox } from '../../src/components/atoms'
import { decoratorContainer } from '../helpers'

const stories = storiesOf('atoms/Checkbox', module)
stories.addDecorator(decoratorContainer)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const disabled = boolean('disabled')
  const readonly = boolean('readonly')

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
    <Checkbox
      disabled={disabled}
      readOnly={readonly}
      size={size}
      intent={intent}
    />
  )
})
