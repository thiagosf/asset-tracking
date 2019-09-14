import React from 'react'

export const decoratorContainer = storyFn => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    {storyFn()}
  </div>
)
