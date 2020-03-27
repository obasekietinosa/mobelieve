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
            infoCollected: false,

            image: glucoseGuardian,
            title: "Glucose Guardian",
            grade: "Glucose Guardian",
            description: "You'll buy anything for your baby as long as it makes her a better person. You often  have lengthy conversations your baby on important things. You often ask her  for advice not because you don't know what to do but you need to see a fresh angle on stuff sometimes. You have a deep connection with your baby.",
            buyLink: "https://paystack.com/pay/glucoseghome",
            buyLinkHome: "https://paystack.com/pay/glucoseghome",
            buyLinkAlt: "https://paystack.com/pay/glucosegaway"
        }
    }

    componentDidMount() {
        const score = this.props.score
        var { image, title, grade, description, buyButton } = this.state
        switch (true) {
            case score == 3:
                image = sucrePapi
                title = "Sucre Papi"
                grade = "Sucre Papi"
                description = "YoYou'll buy anything for your baby. Anything to make her feel and look special. You are very particular about physical appearance because you always want to show your baby off your friends. 'When you are with the Sucre Papi, you need to look like money', you would say."
                buyLinkHome = "https://paystack.com/pay/sucrepapihome",
                buyLinkAlt = "https://paystack.com/pay/sucrepapiaway"
                break;

            case score == 2:
                image = sugarCaneDaddy
                title = "Sugar Cane Daddy"
                grade = "Sugar Cane Daddy"
                description = "YOu'll buy anything for your baby but you'll get it back in king. You are very adventurous and care a lot about sexual prowess. you like a sugar baby for her intelligence, physique but most importantly; her sexual prowess.  You game is to be the tiger or be torn by the tiger. Raaaah!"
                buyLinkHome = "https://paystack.com/pay/sugarcanezaddyhome",
                buyLinkAlt = "https://paystack.com/pay/sugarcanezaddyaway"
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
            buyLinkHome,
            buyLinkAlt
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

    collectInfo = () => {
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

        this.setState({ infoCollected:true })

    }

    render() {

        let results = (
            <React.Fragment>
            <div className="col-sm-12 mb-3 share-instructions">
                <h4 className="primary-text">
                    {this.state.title}
                </h4>
                <p style={{ fontWeight: "300" }} dangerouslySetInnerHTML={{ __html: this.state.description }} />
                <SocialShare 
                    text={this.state.shareText}
                    url={ window.location.href }
                    tag="BigDaddyMo" 
                />
            </div> 
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
                <a href={this.state.selectHome ? this.state.buyLinkHome : this.state.buyLinkAlt} className="btn btn-primary">Buy Merchandise</a>
            </div>
            <div className="col-sm-12 mb-3 col-md-6">
                
            </div>
            </React.Fragment>    
        )

        let collectInfo = (
            <React.Fragment>
             <div className="col-sm-12">
                <h3>Please enter your name and email address to get your results</h3>
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
            <div className="col-12 text-center">
                <button onClick={this.collectInfo} className="btn btn-primary">Get Results!</button>
                <p className="error mt-3">{this.state.error}</p>
            </div>
            </React.Fragment>
        )
        

        return (
            <section id="hero">
                <div className="container">
                    <div className="row">
                    {
                        this.state.infoCollected ?
                            results : collectInfo    
                    } 
                    </div>
                </div>
            </section >
        )
    }
}
