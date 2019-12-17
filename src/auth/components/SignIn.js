import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './signin.scss'; 

import { signIn } from '../api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div>
      <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">

      <form className='auth-form' onSubmit={this.onSignIn}>
        <h3 className="text-center">Sign In</h3>
        <form className="form-signin">
              <div className="form-label-group">
                {/* <input type="email" id="inputEmail" className="form-control" placeholder="email" required autofocus /> */}
        <label htmlFor="email"></label>
        </div>

        <input type="email" name="email" id="inputEmail" className="form-control" value={email} placeholder="Email"
          onChange={this.handleChange} required autofocus />

<div className="form-label-group">
{/* // <input type="password" id="inputPassword" class="form-control" placeholder="Password" required /> */}
        <label htmlFor="password"></label>
          </div>
        <input name="password" id="inputPassword" class="form-control" value={password} type="password" placeholder="Password"
          onChange={this.handleChange} required autofocus />
          <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              
              <button class="btn btn-lg btn- btn-block text-uppercase" type="submit">Sign in</button>
      </form>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
     
    )
  }
}

export default withRouter(SignIn)
