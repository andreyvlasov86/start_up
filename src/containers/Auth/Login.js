import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/Auth'

let Login = ({ dispatch }) => {
    let input

    const handlerSubmit = () => {
        dispatch(login(this.state))
    }

    return (
    <div>
      <form
        onSubmit={handlerSubmit()}
        >
        <input type='email' placeholder='Username'/>
        <input type='password' placeholder='Password'/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

Login = connect()(Login)

export default Login