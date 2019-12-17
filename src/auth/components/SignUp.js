import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      age: '',
      phone: '',
      relation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '', age:'', phone:'', relation:''  })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const { email, password, passwordConfirmation, age, phone, relation  } = this.state

    return (
      <div> 

        <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card card-signin flex-row my-5">
          <div class="card-img-left d-none d-md-flex">
           {/* background img for card set in css  */}
          </div>

           <div class="card-body">
            <h5 class="card-title text-center">Register</h5>
            <form class="form-signin"/>
              <div class="form-label-group">
      <form className='auth-form' onSubmit={this.onSignUp}>
        <h3>Sign Up</h3>

        <label >Email</label>
        <input required name="email" value={email} type="email" placeholder="Email"
          onChange={this.handleChange}/>
           </div>

           
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
          />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
          />
        <label>Age </label>
        <input
          required
          name="age"
          value={age}
          type="number"
          placeholder="Enter your Age "
          onChange={this.handleChange}
          />
        <label>Phone </label>
        <input
          required
          name="phone"
          value={phone}
          type="number"
          placeholder="Enter your Phone "
          onChange={this.handleChange}
          />

<label>Relation </label>
        <input
          required
          name="relation"
          value={relation}
          type="text"
          placeholder="Enter your Relation"
          onChange={this.handleChange}
          />
        
        <button type="submit">Sign Up</button>
      </form>
      </div>
      </div>
      </div>
      </div>
          </div>
    )
  }
}

export default withRouter(SignUp)
