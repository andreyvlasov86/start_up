



export const login = (username, password) => ({
  type: 'LOGIN',
  payload: {
      username,
      password,
  }
});

export const logout = (token) => ({
  type: 'LOGOUT',
  payload: {
      token
  }
});