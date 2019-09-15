import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { ButtonSpinner } from '../../src/components/atoms'
import { decoratorContainer } from '../helpers'

const stories = storiesOf('atoms/ButtonSpinner', module)
stories.addDecorator(decoratorContainer)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const disabled = boolean('disabled')
  const block = boolean('block')
  const small = boolean('small')

  return (
    <ButtonSpinner
      disabled={disabled}
      block={block}
      small={small}
    >
      Submit
    </ButtonSpinner>
  )
})
