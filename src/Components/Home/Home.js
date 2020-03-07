import React, { Component } from 'react'
import './Home.css'
import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom"


export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="hero" className="d-flex align-items-center myh">
          <div class="container">
            <div class="row valign">
              <div className="col-sm-12 col-md-6">
                {/* <img className="img-fluid brain" src={ logo } alt="Brain" /> */}
                <h2>Big Daddy Mo'</h2>
              </div>  
              <div className="col-sm-12 col-md-6 panel">
                <h2>Think you have what it takes to join The Big Daddy Club?</h2>
                <Link role="button" to="/trivia" className="btn btn-secondary waves-effect waves-light"><i class="fas fa-arrow-right animated pulse infinite"></i> Give me some sugar, baby!</Link>
                <p>Join us, if you think you've got that Sugar, Daddy</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
