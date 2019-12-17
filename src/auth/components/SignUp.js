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
      name: '',
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
    const { email, password, passwordConfirmation, name, age, phone, relation  } = this.state

    return (
      <form className='auth-form' onSubmit={this.onSignUp}>
        <h3>Sign Up</h3>

        <label >Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
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
        <label > Name  </label>
        <input
          required
          name="name"
          value={name}
          type="text"
          placeholder="Enter your Name "
          onChange={this.handleChange}
        /> 
        <label >Age </label>
        <input
          required
          name="age"
          value={age}
          type="number"
          placeholder="Enter your Age "
          onChange={this.handleChange}
        />
        <label >Phone </label>
        <input
          required
          name="phone"
          value={phone}
          type="number"
          placeholder="Enter your Phone "
          onChange={this.handleChange}
        />
        <label >Relation </label>
        <input
          required
          name="relation"
          value={relation}
          type="text"
          placeholder="Enter your Relation "
          onChange={this.handleChange}
        /> 
        <button type="submit">Sign Up</button>
      </form>
      
    )
  }
}

export default withRouter(SignUp)
