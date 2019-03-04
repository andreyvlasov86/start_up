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
            const credentials = {
                client: {
                    id: 'D4mAD7fnHNkaEuVQd5X0A9DqXnksmcGPn1Ve1oX8',
                    secret: 'jxuK2v3ubgK3tHU66GLDScft34JHpjjvDUeJedv28wfPvfJstRKQF0U6PkYlS8NWOysl1n6tXZLfcwYCijluNmzSTe7e5zu0oH2MnHpHgD0tCHBMZNzfun5kfyOlJS6A',
                },
                auth: {
                  tokenHost: 'http://178.128.204.78',
                  tokenPath: '/api/v1/auth/token/',
                },
                options: {
                  bodyFormat: 'json',
                  authorizationMethod: 'body',
                }
            };

            const oauth2 = require('simple-oauth2').create(credentials);
            const tokenConfig = {
              username: action.payload.username,
              password: action.payload.password,
              scope: 'read write',
            };

            const auth = oauth2.ownerPassword.getToken(tokenConfig);
            const token = oauth2.accessToken.create(auth);

            localStorage.setItem('isLoggedIn', true)
            return {
                ...state,
                user: {
                    isLoggedIn: true,
                    username: action.payload.username,
                    password: action.payload.password,
                    token: token
                }
            };


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
    }
    ;
}

export default auth