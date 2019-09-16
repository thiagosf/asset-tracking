import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, radios } from '@storybook/addon-knobs'
import { Link } from '../../src/components/atoms'
import { decoratorContainer } from '../helpers'

const stories = storiesOf('atoms/Link', module)
stories.addDecorator(decoratorContainer)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const button = boolean('button')
  const sizeOptions = {
    small: 'small',
    normal: 'normal',
    large: 'large'
  }
  const size = radios('size', sizeOptions, 'normal')

  return (
    <Link
      button={button}
      size={size}
      onClick={e => e.preventDefault()}
    >
      Link
    </Link>
  )
})
