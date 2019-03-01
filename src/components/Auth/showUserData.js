import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class showUserData extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render () {
    const {data} = this.props;
    return (
       <div> Users Data
          <div>
            <h3>User Data</h3>
            <p>isLoggedIn: {data.isLoggedIn ? 'true' : 'false'}</p>
            <p>Username: {data.username}</p>
            <p>password: {data.password}</p>
          </div>
      </div>
    );
  }

}
