const initialState = {
  message: null,
  messageType: 'info'
}

export default (state = initialState, action) => {
  let nextState

  switch (action.type) {
    case 'SET_NOTIFICATION':
      nextState = {
        ...state,
        message: action.message,
        messageType: action.messageType
      }
      break

    default:
      nextState = state
      break
  }

  return nextState
}
