import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './signup.scss';

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor() {
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
        this.setState({ email: '', password: '', passwordConfirmation: '', age: '', phone: '', relation: '' , name:''})
        alert(messages.signUpFailure, 'danger')
      })
  }

  render() {
    const { email, password, passwordConfirmation, age, phone, relation, name } = this.state

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-img-left d-none d-md-flex">
                  {/* background img for card set in css  */}
                </div>

                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form className="form-signin" onSubmit={this.onSignUp}>
                    <div className="form-label-group">
                        <h3>Sign Up</h3>
                      

                    </div>
                    <div className="form-label-group">
                      <input required name="name" id="inputEmail" className="form-control" value={name} type="text" placeholder="Full Name" 
                        onChange={this.handleChange} />
                    </div>


                    <div className="form-label-group">
                      <input required name="email" id="inputEmail" className="form-control" value={email} type="email" placeholder="Email" 
                        onChange={this.handleChange} />
                    </div>

                    {/* <hr> */}
                      <div className="form-label-group">
                        <label htmlFor="password"></label>
                        <input required name="password" id="inputPassword" className="form-control" value={password} type="password" placeholder="Password"
                          onChange={this.handleChange} />
                      </div>
                    {/* </hr> */}
                    

                    <div className="form-label-group">
                      <label htmlFor="passwordConfirmation"></label>
                      <input required name="passwordConfirmation" id="inputConfirmPassword" className="form-control" value={passwordConfirmation} type="password"  placeholder="Confirm Password"
                        onChange={this.handleChange} />
                    </div>

                    <div className="form-label-group">
                      <label htmlFor="Age"> </label>
                      <input required name="age" value={age} type="number"  className="form-control" placeholder="Enter your Age"
                       onChange={this.handleChange} />
                    </div>

                    <div className="form-label-group">
                      <label htmlFor="phone"> </label>
                      <input required name="phone" id="inputPhone" className="form-control" value={phone} type="text" placeholder="Enter your Phone " onChange={this.handleChange} />
                    </div>

                    <div className="form-label-group">
                      <label htmlFor="relation"> </label>
                      <input required name="relation" value={relation} type="text" id="inputRelation" className="form-control" placeholder="Enter your Relation"
                        onChange={this.handleChange} />

                      <button className="btn btn-lg btn-block text-uppercase btn-pos" type="submit">Sign Up</button>
                    </div>
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

export default withRouter(SignUp)
