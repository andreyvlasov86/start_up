import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class showUserData extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render () {
    const {data} = this.props;
    const token = data.token;
    console.log('user_data', data)
    console.log('user_token', token)
    return (
       <div> Users Data
          <div>
            <h3>User Data</h3>
            <p>Access Token: {token.access_token}</p>
            <p>Refresh Token: {token.refresh_token}</p>
            <p>Scope: {token.scope}</p>
            <p>Expires in:  {token.expires_in}</p>
          </div>
      </div>
    );
  }

}
