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
      .then(() => history.push('/home'))
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

      <form className='form-signin' onSubmit={this.onSignIn}>
        <h3 className="text-center">Sign In</h3>
        

        <div className="form-label-group">
        <input required name="email" id="inputEmail" className="form-control" value={email} type="email" placeholder="Email" 
        onChange={this.handleChange} />
        </div>

        <div className="form-label-group">
        <label htmlFor="password"></label>
         
        <input name="password" id="inputPassword" class="form-control" value={password} type="password" placeholder="Password"
          onChange={this.handleChange} required autofocus/> 
           </div>


          <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="customCheck1"/>
          <label className="custom-control-label" for="customCheck1">Remember password</label>
          </div>
              
              <button className="btn btn-lg btn-block text-uppercase btn-pos" type="submit">Sign in</button>

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
