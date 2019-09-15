import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, number } from '@storybook/addon-knobs'
import { Transition } from '../../src/components/atoms'
import { decoratorContainer } from '../helpers'

const stories = storiesOf('atoms/Transition', module)
stories.addDecorator(decoratorContainer)
stories.addDecorator(withKnobs)

stories.add('withKnobs', () => {
  const typeOptions = {
    Scale: 'scale',
    Fade: 'fade',
    FromDown: 'fromDown',
    FromUp: 'fromUp',
    FromLeft: 'fromLeft',
    FromRight: 'fromRight'
  }
  const type = select('type', typeOptions, 'scale')
  const duration = number('duration (ms)', 400)
  const delay = number('delay (ms)', 0)

  return (
    <Transition
      type={type}
      duration={duration}
      delay={delay}
    >
      <div
        style={{
          background: '#000',
          padding: 20,
          maxWidth: 200,
          margin: '0 auto'
        }}
      >Box</div>
    </Transition>
  )
})
