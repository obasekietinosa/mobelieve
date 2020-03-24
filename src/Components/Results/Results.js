import React, { Component } from 'react'
import glucoseGuardian from '../assets/img/glucoseGuardian.jpg'
import sugarCaneDaddy from '../assets/img/sugarCaneDaddy.jpg'
import sucrePapi from '../assets/img/sucrePapi.jpg'

import SocialShare from '../SocialShare/SocialShare';

import './Results.css'

export default class Results extends Component {
    constructor() {
        super();
        this.state = {

            userName: "",
            email: "",
            termsAccepted: false,

            image: glucoseGuardian,
            title: "Glucose Guardian",
            grade: "Glucose Guardian",
            description: "You're a Glucose Guardian!",
            buyButton: <a href="" className="btn btn-secondary waves-effect waves-light">Buy Merchandise</a>
        }
    }

    componentDidMount() {
        const score = this.props.score
        var { image, title, grade, description, buyButton } = this.state
        switch (true) {
            case score >= 70:
                image = sucrePapi
                title = "Sucre Papi"
                grade = "Sucre Papi"
                description = "You the Sucre Papi for the Parte after Parte"
                buyButton = <a href="" className="btn btn-secondary waves-effect waves-light">Buy Merchandise</a>
                break;

            case score >= 40:
                image = sugarCaneDaddy
                title = "Sugar Cane Daddy"
                grade = "Sugar Cane Daddy"
                description = "Ever ready for the action."
                buyButton = <a href="" className="btn btn-secondary waves-effect waves-light">Buy Merchandise</a>
                break;

            default:
                break;
        }
        let shareText = "I am a " + grade + "! Find your Big Daddy Status today"
        this.setState({
            image,
            title,
            grade,
            description,
            shareText,
            buyButton
        })

    }

    setUserName = (e) => {
        let userName = e.target.value
        if (userName.length) {
            this.setState({
                userName
            })
        }
    }

    setEmail = (e) => {
        let email = e.target.value
        if (email.length) {
            this.setState({
                email
            })
        }
    }

    acceptTerms = (e) => {
        let termsAccepted = !this.state.termsAccepted
        this.setState({ termsAccepted })
    }

    sendEmail = () => {
        if (this.state.userName.length > 5) {
            this.setState({
                error: "Please Use 5 characters or less"
            })
            return
        }
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email))) {
            this.setState({
                error: "Please give us a valid email address"
            })
            return
        }
        if (!this.state.termsAccepted) {
            this.setState({
                error: "Please accept the terms to continue."
            })
            return
        }

    }

    render() {
<<<<<<< HEAD
=======
        const imageUrl = "https://services.etin.space/bolt-campaign/api/green/result?score=" + this.props.score + "&name=" + this.props.name
        const ctaButton = <a
            href={imageUrl}
            target="_blank"
            className="btn btn-lg btn-primary">
            Get The Invite
                        </a>
>>>>>>> 13f850514cd62658b39024039d17a5bd9198f146

        return (
            <section id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mb-3 col-md-6">
                            <img
                                className="img-fluid"
                                src={this.state.image}
                                style={{
                                    maxHeight: "350px",
                                    margin: "0 auto",
                                    display: "block"
                                }}
                            />
                            {/* <h2 className="primary-text text-center mt-3 bold">{ this.state.grade }</h2> */}
                        </div>
                        <div className="col-sm-12 mb-3 col-md-6 share-instructions">
                            <h4 className="primary-text">
                                {this.state.title}
                            </h4>
                            <p style={{ fontWeight: "300" }} dangerouslySetInnerHTML={{ __html: this.state.description }} />
<<<<<<< HEAD
                            <SocialShare 
                                text={this.state.shareText}
                                url={ window.location.href }
                                tag="BigDaddyMo" 
                            />
=======
                                <div className="col-sm-12 share-btns px-0 my-3">
                                    <a
                                        href={"https://www.facebook.com/sharer/sharer.php?u=https://big-daddy-mo.web.app&quote=" + encodeURI(this.state.shareText) + " #BigDaddyMo"}
                                        // className="social mb-2 facebook btn-floating"
                                        className="social mb-2 facebook btn"
                                        target="_blank"
                                    >
                                        <i className="fab fa-facebook"></i> Facebook
                                    </a>
                                    &nbsp;
                                    <a
                                        href={"https://twitter.com/intent/tweet?text=" + encodeURI(this.state.shareText) + "&url=https://big-daddy-mo.web.app&hashtags=BigDaddyMo"}
                                        // className="social mb-2 twitter btn-floating"
                                        className="social mb-2 twitter btn"
                                        target="_blank"
                                    >
                                        <i className="fab fa-twitter"></i> Twitter
                                    </a>
                                    &nbsp;
                                    <a
                                        href={"whatsapp://send?text=" + encodeURI(this.state.shareText) + " https://big-daddy-mo.web.app"}
                                        // className="social mb-2 whatsapp btn-floating"
                                        className="social mb-2 whatsapp btn"
                                        target="_blank"
                                    >
                                        <i className="fab fa-whatsapp"></i> WhatsApp
                                    </a>
                                    &nbsp;
                                </div>
                            {ctaButton}
>>>>>>> 13f850514cd62658b39024039d17a5bd9198f146
                        </div>
                        <div className="col-sm-12">
                            <input
                                placeholder="Your Monosyllabic Sugar Daddy Name"
                                onChange={this.setUserName}
                                value={this.state.userName}
                                id="name"
                                name="name"
                                type="text"
                                className="form-control mb-3"
                                maxLength="10"
                            />
                            <input
                                placeholder="Your Email Address"
                                onChange={this.setEmail}
                                value={this.state.email}
                                id="email"
                                name="email"
                                type="email"
                                className="form-control mb-3"
                            />
                        </div>

                        <div className="form-group text-center col-md-6 offset-md-3 checkbox">
                            <label htmlFor="acceptTerms">
                                <input
                                    id="acceptTerms"
                                    type="checkbox"
                                    onClick={this.acceptTerms}
                                    defaultChecked={this.state.termsAccepted}
                                />
                                &nbsp;You accept to be contacted by the Big Daddy Club
                            </label>
                            {/* <p className="col-12 text-center">Nous allons l'utiliser pour imprimer votre certificat</p> */}
                        </div>
                        <div className="col-12 text-center">
                            {this.state.buyButton}
                            <p className="error mt-3">{this.state.error}</p>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
