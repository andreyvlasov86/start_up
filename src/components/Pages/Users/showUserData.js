import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { checkTokenExpired, refreshToken } from "../../../store/auth/actions";
import {formatDateTime} from "../../../service/date";

export default class showUserData extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render () {
    const {status, token} = this.props.data;
    return (
       <div> Users Data
          <div>
            <h3>User Data</h3>
            <p>Access Token: {token.access_token}</p>
            <p>Refresh Token: {token.refresh_token}</p>
            <p>Scope: {token.scope}</p>
            <p>Expires in:  {token.expires_in}</p>
            <p>Expires at:  {formatDateTime(token.expires_at)}</p>
          </div>
          <div>
                <button onClick={() => this.props.dispatch(checkTokenExpired())}>Check that Token is expired</button>
                  {status.loading
                    ? <p>Loading...</p>
                    : status.error
                        ? <p>Error, try again</p>
                        : ''}
              <p>Expired: {token.token_expired}</p>
              <p>Expires At: {token.token_expires_at ? formatDateTime(token.token_expires_at) : ''}</p>
          </div>
            <div>
                <button onClick={() => this.props.dispatch(refreshToken(token))}>Refresh Token</button>
                {
                    status.r_loading
                    ? <p>Loading...</p>
                    : status.r_error
                        ? <p>Error, try again</p>
                        : <p></p>
                }
            </div>
      </div>
    );
  }

}
