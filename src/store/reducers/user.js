const initialState = {
  user: null,
  sending: false,
  responseStatus: false
}

const identifier = 'user'

export default (state = initialState, action) => {
  let nextState

  switch (action.type) {
    case 'BEFORE_SEND':
      if (action.identifier === identifier) {
        nextState = {
          ...state,
          sending: true
        }
      }
      break

    case 'AFTER_RESPONSE':
      if (action.identifier === identifier) {
        nextState = {
          ...state,
          sending: false
        }
      }
      break

    case 'SET_USER':
      nextState = {
        ...state,
        user: action.user,
        checked: true
      }
      break

    default:
      nextState = state
      break
  }

  return nextState
}
