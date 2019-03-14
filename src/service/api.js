import axios from 'axios';

//import {globals} from '../store/globals';
//import {actions as userActions} from '../store/user/userActions';
import {store} from '../store/_config/index';
import * as userActions from '../store/auth/actions';


// Local
//export const DOMAIN_URI = process.env.API_URL;
export const DOMAIN_URI = 'http://178.128.204.78';
export const API_URI = '/api/v1/';

export default class Api {
  static methods = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
  };
  static getStaticUrl(url) {
    if(!url) {
      return null;
    }
    if(typeof url === 'string' && url.startsWith('http')) {
      return url;
    }
    return `${DOMAIN_URI}${API_URI}${url}`;
  }

  static composeRouteUrl(route) {
    return `${DOMAIN_URI}${API_URI}${route}`;
  }

  static get(route, params, auth) {
    return Api.request(route, params, undefined, Api.methods.GET, auth);
  }

  static put(route, params, data, auth) {
    return Api.request(route, params, data, Api.methods.PUT, auth);
  }

  static post(route, data, auth, appendHeaders) {
    return Api.request(route, undefined, data, Api.methods.POST, auth, appendHeaders);
  }

  static delete(route, params, auth) {
    return Api.request(route, params, undefined, Api.methods.DELETE, auth);
  }

  static request(route, params, data, method, auth=true, appendHeaders) {
    const url = Api.composeRouteUrl(route, params);
    console.log('api url', url);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Requested-With': 'XMLHttpRequest',
    };
    if(auth) {
      //const state = globals.store.getState();
      //headers['Authorization'] = state.user.token;
      const state = store.getState();
      console.log('api state', state);
      headers['Authorization'] = state.auth.token.token_type + ' ' + state.auth.token.access_token;
    }

    if(appendHeaders) {
      headers = {...headers, ...appendHeaders};
    }
    console.log('api headers', headers);

    return axios({
      method,
      url,
      headers,
      params,
      data,
    }).catch((err) => {
      Api.handleError(err);
      throw err;
    });
  }

  static uploadImage(image) {
    const form = new FormData();
    form.append('image', image);
    const headers = {
      'Content-Type': 'multipart/form-data'
    };
    return Api.post('upload/image', form, false, headers);
  }

  static handleError(error) {
    const response = error.response || error;
    let message = response.data && response.data.message? response.data.message : null;
    if(response.status === 400) {
      //globals.store.dispatch(userActions.logout());
      store.dispatch(userActions.logout());
      return;
    }
    if(Array.isArray(message)) {
      message = message.join('\n');
    }
    if(message) {
      alert(`Error occurred:\n\n${message}`);
    } else if(response.data && response.data.code) {
      alert(`Error occurred:\n\n${response.status} ${response.data.code}`);
    } else {
      alert(`Error occurred:\n\n ${response.status? response.status : ''} Unknown server error`);
    }
    if(response.data.stack) {
      console.log('---Response stack---');
      console.log(response.data.stack);
    }
    if(response.status === 401) {
      //globals.store.dispatch(userActions.logout());
      store.dispatch(userActions.refreshToken());
    }
  }
}
