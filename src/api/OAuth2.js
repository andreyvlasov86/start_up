
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

    // Get the access token object.
const tokenConfig = {
      username: 'username',
      password: 'password',
      scope: 'read write',
    };

    // Save the access token


get('/auth', async (req, res) => {
    try {
        const result = oauth2.ownerPassword.getToken(tokenConfig);
        const accessToken = oauth2.accessToken.create(result);
        console.log('accessToken', accessToken)
    } catch (error) {
        console.error('Access Token Error', error.message);
        return res.status(500).json('Authentication failed')
    }
    })

