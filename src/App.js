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
<<<<<<< HEAD
            {/* <Carousel> 
            <Carousel.Item>
    <img
      className="d-block "
      src={slider1}
      alt="First slide"
      width="1285px"
      height="470px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src={slider2}
      alt="Third slide"
      width="1285px"
      height="470px"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src={slider3}
      width="1285px"
      height="470px"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
            </Carousel> */
            }
{/* <Footer /> */}
=======
          <Footer />
>>>>>>> 2355d8dd275bef98ce536642b89db41902b6ae10
      </React.Fragment>
    )
  }
}
export default App