import { accessToken } from '../../service/apiOAuth';


const initialState = {
    token: {
        access_token: localStorage.getItem('access_token'),
		refresh_token: localStorage.getItem('refresh_token'),
		expires_in: localStorage.getItem('expires_in'),
        expires_at: localStorage.getItem('expires_at'),
		scope:  localStorage.getItem('scope'),
		token_type: localStorage.getItem('token_type'),
        token_expires_at: null
    },
    status: {
        loading: false,
        error: false,
    }
};


const auth = (state = initialState, action) => {
    switch (action.type) {

        case 'LOGIN':
            return {
                ...state,
                status: {
                    username: action.payload.username,
                    password: action.payload.password,
                    loading: false,
                    error: false,
                }
            };

        case 'GET_TOKEN':
            return {
                ...state,
                status: {
                    loading: true,
                    error: false,
                },
            };

        case 'GET_TOKEN_SUCCESS':

            localStorage.setItem('access_token', action.payload.token.access_token);
            localStorage.setItem('refresh_token', action.payload.token.refresh_token);
            localStorage.setItem('expires_in', action.payload.token.expires_in);
            localStorage.setItem('expires_at', action.payload.token.expires_at);
            localStorage.setItem('scope', action.payload.token.scope);
            localStorage.setItem('token_type', action.payload.token.token_type);

            return {
                ...state,
                token: action.payload.token,
                status: {
                    loading: false,
                    error: false,
                }
            };

        case 'GET_TOKEN_ERROR':
            return {
                ...state,
                token: null,
                status: {
                    loading: false,
                    error: true,
                }
            };

        case 'CHECK_TOKEN_EXPIRED':
            const {token} = accessToken(state.token);
            return {
                ...state,
                token: {...state.token,
                    token_expired: accessToken(state.token).expired() ? 'true' : 'false',
                    token_expires_at: token.expires_at
                }
            };

        case 'REFRESH_TOKEN':
            return {
                ...state,
                status: {
                    r_loading: true,
                    r_error: false,
                }
            };

        case 'REFRESH_TOKEN_SUCCESS':

            localStorage.clear();

            localStorage.setItem('access_token', action.payload.token.access_token);
            localStorage.setItem('refresh_token', action.payload.token.refresh_token);
            localStorage.setItem('expires_in', action.payload.token.expires_in);
            localStorage.setItem('expires_at', action.payload.token.expires_at);
            localStorage.setItem('scope', action.payload.token.scope);
            localStorage.setItem('token_type', action.payload.token.token_type);

            return {
                ...state,
                token: action.payload.token,
                status: {
                    r_loading: false,
                    r_error: false,
                }
            };

        case 'REFRESH_TOKEN_ERROR':
            return {
                ...state,
                status: {
                    r_loading: false,
                    r_error: true,
                }
            };

        case 'LOGOUT':
			return state;

        case 'LOGOUT_SUCCESS':
		    localStorage.clear();
			return {...state, token: {}};

        default:
            return state

    }
};

export default auth