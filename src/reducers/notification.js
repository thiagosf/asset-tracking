const initialState = {
  message: null,
  messageType: 'info'
}

export default (state = initialState, action) => {
  let nextState

  switch (action.type) {
    case 'SET_NOTIFICATION':
    case 'BEFORE_SEND':
      nextState = Object.assign({}, state, {
        message: action.message,
        messageType: action.messageType
      })
      break

    default:
      nextState = state
      break
  }

  return nextState
}
