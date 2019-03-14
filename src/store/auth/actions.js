//Login
export const login = (username, password) => {
  return {
      type: 'LOGIN',
      payload: {
          username,
          password,
      }
  }
};

export const getToken = () => {
  return { type: 'GET_TOKEN' }
};

export const getTokenSuccess = (token) => {
    return {
      type: 'GET_TOKEN_SUCCESS',
      payload: {
          token
      }
    }
};

export const getTokenError = () => {
  return { type: 'GET_TOKEN_ERROR' }
};


//Check Token Expired
export const checkTokenExpired =() => {
    return {
      type: 'CHECK_TOKEN_EXPIRED'
  }
};

//Refresh Token
export const refreshToken = () => {
    return {
        type: 'REFRESH_TOKEN',
    }
};

export const refreshTokenSuccess = (token) => {
    return {
        type: 'REFRESH_TOKEN_SUCCESS',
        payload: {
          token
      }
    }
};

export const refreshTokenError =() => {
    return {type: 'REFRESH_TOKEN_ERROR'}
};

//Logout and revoke token
export const logout = () => ({
    type: 'LOGOUT'
});

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS'
});