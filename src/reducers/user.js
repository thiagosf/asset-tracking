const initialState = {
  user: null,
  sending: false,
  responseStatus: false
}

export default (state = initialState, action) => {
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case 'BEFORE_SEND':
      nextState = Object.assign(nextState, {
        sending: true
      })
      break

    case 'AFTER_RESPONSE':
      nextState = Object.assign(nextState, {
        sending: false
      })
      break

    case 'SET_USER':
      nextState = Object.assign(nextState, {
        user: action.user,
        checked: true
      })
      break

    default:
      nextState = state
      break
  }

  return nextState
}
