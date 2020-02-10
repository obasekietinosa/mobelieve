import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Default extends Component {
  render() {
    return (
      <div className="align-items-center vh-100 d-flex text-center">
        <div className="text-center w-100">
          <p>404</p>
          <h1>Keep A Good Time Going Folks!</h1>
          <h3 >Oops, We couldn't find that.</h3  >
          <Link to="/">
            Go Back Home?
          </Link>
        </div>
      </div>
    )
  }
}
