import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'
import { FormControl } from '../../src/components/molecules'
import { decoratorContainerLeft } from '../helpers'

const stories = storiesOf('molecules/FormControl', module)
stories.addDecorator(decoratorContainerLeft)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const disabled = boolean('disabled')
  const typeOptions = {
    Text: 'text',
    Number: 'number',
    Email: 'email',
    Radio: 'radio',
    Checkbox: 'checkbox',
    Select: 'select',
    Textarea: 'textarea',
    Calendar: 'calendar'
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

  const [value, setValue] = useState('')

  return (
    <FormControl
      value={value}
      disabled={disabled}
      label={label}
      type={type}
      errors={errors}
      options={options}
      onChange={setValue}
    />
  )
})

stories.add('calendar', () => {
  const [value, setValue] = useState(new Date())
  return (
    <FormControl
      label='Date'
      type='calendar'
      value={value}
      onChange={setValue}
    />
  )
})
