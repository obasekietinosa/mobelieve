import React, { Component } from 'react'
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom"
import './Header.css'

export default class Header extends Component {
  render() {
    return (
        <nav className="mt-5">
          <Link to="/">
            <img className="brand-logo" src={logo} alt="Big Daddy Mo'" />
          </Link>
        </nav>
    )
  }
}
