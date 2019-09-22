import React from 'react'

export const makeDecorator = (storyFn, options = {}) => {
  const styles = {
    padding: '50px',
    textAlign: 'center',
    ...options
  }
  return (
    <div style={styles}>
      {storyFn()}
    </div>
  )
}

export const decoratorContainerLeft = storyFn => {
  return makeDecorator(storyFn, {
    textAlign: 'left'
  })
}

export const decoratorContainer = storyFn => {
  return makeDecorator(storyFn, {
    textAlign: 'center'
  })
}
