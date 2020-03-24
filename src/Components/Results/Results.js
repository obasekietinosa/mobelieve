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

    }

    render() {

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
                            <SocialShare 
                                text={this.state.shareText}
                                url={ window.location.href }
                                tag="BigDaddyMo" 
                            />
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
