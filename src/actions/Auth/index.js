export const login = (username, password) => ({
  type: 'LOGIN',
  payload: {
      token: {},
      username,
      password,
      isLoggedIn: false
  }
});

export const logout = (isLoggedIn) => ({
  type: 'LOGOUT',
  payload: {
      isLoggedIn
  }
});