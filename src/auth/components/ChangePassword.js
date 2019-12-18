import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './changeP.scss'; 
import { changePassword } from '../api'
import messages from '../messages'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => alert(messages.changePasswordSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        alert(messages.changePasswordFailure, 'danger')
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <div>
         <div className="container">
      <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">

      <form className='auth-form' onSubmit={this.onChangePassword}>
        <h3>Change Password</h3>
        
          <div className="form-label-group">
        <label htmlFor="oldpw"></label>
        <input required name="oldPassword" value={oldPassword} type="password" placeholder="Old Password"
          onChange={this.handleChange}/>
          </div>

          <div className="form-label-group">
        <label htmlFor="newPassword"></label>
        <input required name="newPassword"value={newPassword} type="password"placeholder="New Password"onChange={this.handleChange}/>
          </div>
          
        <button className="btn btn-lg btn-block text-uppercase btn-pos" type="submit">Change Password</button>
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

export default withRouter(ChangePassword)
