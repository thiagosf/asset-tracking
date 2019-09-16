import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { FormControl } from '../../src/components/molecules'
import { decoratorContainerLeft } from '../helpers'

const stories = storiesOf('molecules/FormControl', module)
stories.addDecorator(decoratorContainerLeft)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const typeOptions = {
    Text: 'text',
    Number: 'number',
    Email: 'email',
    Radio: 'radio',
    Checkbox: 'checkbox',
    Select: 'select',
    Textarea: 'textarea'
  }
  const label = text('label', 'Name')
  const type = select('type', typeOptions, 'text')
  let errors = text('errors')
  if (errors) {
    errors = [errors]
  }
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
    <FormControl
      label={label}
      type={type}
      errors={errors}
      options={options}
    />
  )
})
