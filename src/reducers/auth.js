const initialState = {
    user: {
        isLoggedIn: localStorage.getItem('isLoggedIn'),
        username: '',
        password: '',
        token: null
    }
}


const auth = (state = initialState, action) => {
  switch (action.type) {
        case 'LOGIN':
          localStorage.setItem('isLoggedIn', true);
          return {
              ...state,
              user: {
                  isLoggedIn: true,
                  username: action.payload.username,
                  password: action.payload.password,
              }
          }

        case 'LOGOUT':
            localStorage.removeItem('isLoggedIn');
            return {
                ...state,
                user: {
                    isLoggedIn: false,
                }
            }

        default:
            return state
  };
}

export default auth