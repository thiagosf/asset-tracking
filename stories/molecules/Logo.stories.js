import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Logo } from '../../src/components/molecules'
import { decoratorContainer } from '../helpers'

const stories = storiesOf('molecules/Logo', module)
stories.addDecorator(decoratorContainer)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const onlyIcon = boolean('onlyIcon')

  return (
    <Logo
      onlyIcon={onlyIcon}
    />
  )
})
