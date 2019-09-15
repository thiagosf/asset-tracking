import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { FormControl } from '../../src/components/atoms'
import { decoratorContainerLeft } from '../helpers'

const stories = storiesOf('atoms/FormControl', module)
stories.addDecorator(decoratorContainerLeft)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const typeOptions = {
    Text: 'text',
    Number: 'number',
    Email: 'email'
  }
  const label = text('label', 'Name')
  const type = select('type', typeOptions, 'text')
  let errors = text('errors')
  if (errors) {
    errors = [errors]
  }

  return (
    <FormControl
      label={label}
      type={type}
      errors={errors}
    />
  )
})
