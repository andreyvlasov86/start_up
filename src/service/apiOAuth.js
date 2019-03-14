const credentials = {
                client: {
                    id: 'D4mAD7fnHNkaEuVQd5X0A9DqXnksmcGPn1Ve1oX8',
                    secret: 'jxuK2v3ubgK3tHU66GLDScft34JHpjjvDUeJedv28wfPvfJstRKQF0U6PkYlS8NWOysl1n6tXZLfcwYCijluNmzSTe7e5zu0oH2MnHpHgD0tCHBMZNzfun5kfyOlJS6A',
                },
                auth: {
                  tokenHost: 'http://178.128.204.78',
                  tokenPath: '/api/v1/auth/token/',
                  revokePath: '/api/v1/auth/revoke_token/'
                },
                options: {
                  bodyFormat: 'json',
                }
            };
export const oauth2 = require('simple-oauth2').create(credentials);


export const accessToken = (token) => {
    return  oauth2.accessToken.create(token)
};


export default oauth2