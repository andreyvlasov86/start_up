import React from 'react'
import PropTypes from 'prop-types'

const UserData = ({ data }) => (
  <div>
      <h1>User Data</h1>
      <h3>isLoggedIn: {data.isLoggedIn}</h3>
      <h3>Username: {data.username}</h3>
      <h3>password: {data.username}</h3>
      <h3>Token: {data.token}</h3>
  </div>
)

UserData.propTypes = {
  data: PropTypes.func.isRequired,
}

export default UserData