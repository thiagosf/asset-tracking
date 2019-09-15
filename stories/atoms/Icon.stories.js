import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, radios } from '@storybook/addon-knobs'
import { Icon } from '../../src/components/atoms'
import { decoratorContainer } from '../helpers'

const stories = storiesOf('atoms/Icon', module)
stories.addDecorator(decoratorContainer)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const nameOptions = {
    Settings: 'cog',
    Close: 'close'
  }
  const name = select('name', nameOptions, 'cog')

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
    <Icon
      name={name}
      size={size}
      intent={intent}
    />
  )
})
