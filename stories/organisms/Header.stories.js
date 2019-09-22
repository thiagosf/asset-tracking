import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { Header } from '../../src/components/organisms'

const stories = storiesOf('molecules/Header', module)

stories.add('default', () => {
  return <Header />
})
