const initialState = {
    user: {
        token: {
            access_token: localStorage.getItem('access_token'),
            expires_in: localStorage.getItem('expires_in'),
            refresh_token: localStorage.getItem('refresh_token'),
            scope: localStorage.getItem('scope'),
            token_type: localStorage.getItem('token_type')
        }
    }
};


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
                    }
                };

            const oauth2 = require('simple-oauth2').create(credentials);
            const tokenConfig = {
              username: action.payload.username,
              password: action.payload.password,
              scope: 'read write'
            };

            const request = async () => {
               const result = await oauth2.ownerPassword.getToken(tokenConfig);
               //const token = oauth2.accessToken.create(result);
               return result
            };

            const res = request().then(function(token) {
                 console.log('Access Token resolve', token);
                 localStorage.setItem('access_token', token.access_token);
                 localStorage.setItem('expires_in', token.expires_in);
                 localStorage.setItem('refresh_token', token.refresh_token);
                 localStorage.setItem('scope', token.scope);
                 localStorage.setItem('token_type', token.token_type);
                 return token
                 });

            return {...state,
                    user: {
                        token: {
                            access_token: localStorage.getItem('access_token'),
                            expires_in: localStorage.getItem('expires_in'),
                            refresh_token: localStorage.getItem('refresh_token'),
                            scope: localStorage.getItem('scope'),
                            token_type: localStorage.getItem('token_type'),
                            }
                        }
                    };

        case 'LOGOUT':

            localStorage.removeItem('token');

            return {
                ...state,
                user: {
                    token: null,
                    token_data: null
                }
            }

        default:
            return state
    }
    ;
}

export default auth