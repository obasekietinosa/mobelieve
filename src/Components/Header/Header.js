import React, { Component } from 'react'
import logo from '../assets/img/sponsor.png'
import { Link } from "react-router-dom"
import './Header.css'

export default class Header extends Component {
  render() {
    return (
        <nav className="mt-5">
          <Link to="/">
            {/* <img className="brand-logo" src={logo} alt="A Good Time" /> */}
            <h4>Big Daddy Mo'</h4>
          </Link>
        </nav>
    )
  }
}
