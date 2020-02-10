import React, { Component } from 'react'

export default class HighScores extends Component {
    constructor() {
        super();
        this.state = {
            scores: [],
            error: ""
        }
    }

    componentDidMount() {
        console.log("Showing Scores")
        fetch("https://teni-the-billionaire.firebaseio.com/high-scores.json?orderBy=%22score%22&limitToLast=" + this.props.limit, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let scores = data
                scores = Object.values(scores).sort((a,b) => (a.score < b.score) ? 1: -1)
                this.setState({ scores, error: "" })
            })
            .catch(error => this.setState({ error: "There was an error fetching high scores. Please try again." }))
    }
    render() {
        const error = <div className="col-12">{this.state.error}</div>
        const scores = (
            <div className="col-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Country</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.scores.map((item, key) => {
                                return (
                                    <tr key={ key }>
                                        <th scope="row">{ key + 1 }</th>
                                        <td>{ item.name }</td>
                                        <td>{ item.country }</td>
                                        <td>{ item.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>
        )
        return (
            <div className="col-s12">
                <h2 className="text-center">The Top { this.props.limit } Players</h2>
                {this.state.error.length ? error : scores}
            </div>
        )
    }
}
