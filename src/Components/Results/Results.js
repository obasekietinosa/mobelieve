import React, { Component } from 'react'
import glucoseGuardian from '../assets/img/glucoseGuardian.jpg'
import sugarCaneDaddy from '../assets/img/sugarCaneDaddy.jpg'
import sucrePapi from '../assets/img/sucrePapi.jpg'

import './Results.css'

export default class Results extends Component {
    constructor() {
        super();
        this.state = {
            image: glucoseGuardian,
            title: "Glucose Guardian",
            grade: "Glucose Guardian",
            description: "You're a Glucose Guardian!"
        }
    }

    componentDidMount() {
        const score = this.props.score
        var { image, title, grade, description } = this.state
        switch (true) {
            case score >= 70:
                image = sucrePapi
                title = "Sucre Papi"
                grade = "Sucre Papi"
                description = "You the Sucre Papi for the Parte after Parte"
                break;

            case score >= 40:
                image = sugarCaneDaddy
                title = "Sugar Cane Daddy"
                grade = "Sugar Cane Daddy"
                description = "Ever ready for the action."
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
            shareText
        })

        if (Math.round(Math.random(0, 1))) {
            fetch("https://services.etin.space/bolt-campaign/api/green/promo.php", {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        console.log(data)
                        let promoCode = data.promo.code
                        let promoType = data.promo.type
                        this.setState({ promoCode, promoType, hasPromo: true, error: "" })
                    }
                })
                .catch(error => {
                    //
                })
        }
    }

    render() {
        const imageUrl = "https://services.etin.space/bolt-campaign/api/green/result?score=" + this.props.score + "&name=" + this.props.name
        const ctaButton = <a
            href={imageUrl} 
            target="_blank"
            className="btn btn-lg btn-primary">
            Get The Invite
                        </a>

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
                            <h2 className="primary-text text-center mt-3 bold">{ this.state.grade }</h2>
                        </div>
                        <div className="col-sm-12 mb-3 col-md-6 share-instructions">
                            <h4 className="primary-text">
                                {this.state.title}
                            </h4>
                            <p style={{ fontWeight: "300" }} dangerouslySetInnerHTML={{ __html: this.state.description }} />
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
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
