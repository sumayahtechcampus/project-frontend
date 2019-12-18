import React, { Component, Children } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import Footer from './footer/Footer'
import MyProfile from './auth/components/MyProfile'
import Centeres from './centeres/components/centeres'
import Home from './home/Home'
import Childrens from './children/components/childrens'
class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      alerts: [],
      centeres: [],
      childrens: []
    }
  }
  setUser = user => this.setState({ user })

  setCenteres = (centeres) => 
  {   console.log(centeres);

    this.setState({centeres : [...centeres]}) ; }

  setChildrens = (childrens) => 
  {   console.log(childrens);

    this.setState({childrens : [...childrens]}) ; }

  clearUser = () => this.setState({ user: null })
  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }
  render () {
    const { alerts, user, centeres ,childrens} = this.state
    return (
      <React.Fragment>
        <Header user={user} />
        <Route path='/home' render={() => (
          <Home />
        )} /> 
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/centeres' render={() => (
            <Centeres alert={this.alert} centeres={ centeres} setCenteres={this.setCenteres} />
          )} />
           <AuthenticatedRoute path='/childrens' render={() => (
            <Childrens alert={this.alert} childrens={childrens} setChildrens={this.setChildrens} />
          )} />

          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
           <AuthenticatedRoute user={user} path='/my-profile' render={() => (
            <MyProfile alert={this.alert} user={user} />
          )} />
          </main>
          <Footer />
      </React.Fragment>
    )
  }
}
export default App