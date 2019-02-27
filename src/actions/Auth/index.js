export const login = payload => ({
  type: 'LOGIN',
  payload: {
      token: {},
      username: '',
      password: '',
      isLoggedIn: false
  }
})