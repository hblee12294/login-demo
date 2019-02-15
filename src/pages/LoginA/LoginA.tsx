import React, { Component } from 'react'
import './LoginA.scss'

class LoginA extends Component {
  public render() {
    return (
      <main className="a-container">
        <div className="a-left" />
        <div className="a-right">
          <div className="a-panel">
            <input type="text" />
            <button>Login</button>
          </div>
        </div>
      </main>
    )
  }
}

export default LoginA
