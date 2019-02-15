import React, { Component } from 'react'
import './LoginA.scss'

import { Credit } from '../../common/Credit'

class LoginA extends Component {
  public render() {
    return (
      <main className="a-container">
        <div className="a-left">
          <Credit text="Photo by Geran de Klerk" bottom="1.5rem" left="2rem" />
        </div>
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
