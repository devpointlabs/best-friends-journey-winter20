import React, { Component } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext() 

export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {
  state = { user: null }

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data })
        history.push('/')
      })
      .catch( res => {
        console.log(res)
      })
  }

  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data })
        history.push('/')
      })
      .catch( res => {
        console.log(res)
      })
  }

  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null })
        history.push('/login')
      })
      .catch( res => {
        console.log(res)
      })

  }

  updateProfile = (id,user) => {
    axios.put(`/api/users/${id}`, user)
    .then( res => {
      // this.setUser({ user: null })
      // history.push('/login')
    })
    .catch( res => {
      console.log(res)
    })
    
  }

  render() {
    return(
      <AuthContext.Provider value={{
        ...this.state,
        handleRegister: this.handleRegister, 
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        updateProfile: this.updateProfile,
        authenticated: this.state.user !== null,
        setUser: (user) => this.setState({ user })
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider;