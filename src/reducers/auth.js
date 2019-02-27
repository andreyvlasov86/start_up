const auth = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return [
        ...state,
        {
          isLoggedIn: false,
          username: action.username,
          password: action.password,
          token: {}
        }
      ]
    case 'GET_TOKEN':
      return [
          ...state,
          {
            isLoggedIn: true,
            token: action.token
          }
      ]
    case 'LOGOUT':
      return [
          ...state,
          {
            isLoggedIn: false,
            token: {}
          }
      ]
    default:
      return state
  }
}

export default auth