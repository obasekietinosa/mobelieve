import React, { Component } from 'react'
import Question from './Question'
import Option from './Option'
import Results from '../Results/Results';
import Loading from '../Loading/Loading';

export default class Quiz extends Component {

  constructor() {
    super();
    this.state = {
      currentQuestion: "intro",
      error: "",
      totalQuestions: 8,
      userName: "",
      email: "",
      termsAccepted: false,
      answers: [],
      score: 0,
      selected: [],
      endQuiz: false,
      alreadyQuizzed: false,
      button: <button onClick={this.startQuiz} className="btn btn-secondary waves-effect waves-light">Let's Begin! <i className="fas fa-arrow-right"></i></button>,
      questionsLoaded: false,
      questions: [
        {
          text: "Dummy Question?",
          options: [
            {
              value: 1,
              text: "Remain in a safe place until your driver arrives"
            },
            {
              value: 0,
              text: "Call your driver repeatedly until he shows up"
            },
            {
              value: 0,
              text: "Lurk in a dodgy corner on your street"
            }
          ]
        }
      ]
    };
    this.myRef = React.createRef()
  }

  componentDidMount() {

    console.log("Showing Questions")
    fetch("https://big-daddy-mo.firebaseio.com/questions.json", {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let questions = data
        questions = Object.values(questions)
        let questionsLoaded = true
        this.setState({ questions, questionsLoaded, totalQuestions: questions.length, error: "" })
      })
      .catch(error => {
        error = "There was an error fetching questions. Please try again."
        this.setState({ error })
      })
    return
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

  isCurrentQuestion = (question) => {
    return question === this.state.currentQuestion
  }

  startQuiz = () => {
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
    this.setState({ currentQuestion: 0 })
  }

  isSelected = (question, option) => {
    return this.state.selected[question] === option ? true : false
  }

  endGame = () => {
    this.calculateScore()
    this.setState({ endQuiz: true })
  }

  checkQuestionsCompleted = () => {
    if (this.state.currentQuestion >= this.state.totalQuestions) {
      this.endGame()
    }
  }

  calculateScore = () => {
    let score = this.state.answers.reduce((sum, element) => {
      return sum + element;
    })
    score *= 10
    console.log(score)
    this.setState({ score })
  }

  selectOption = (question, answer) => {
    let answers = this.state.answers
    answers[question] = answer

    this.setState({ answers })
    this.scrollToMyRef()
    let currentQuestion = this.state.currentQuestion + 1
    this.setState({ currentQuestion }, this.checkQuestionsCompleted)
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

  render() {
    const quiz = <section id="hero" ref={this.myRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <Question show={this.isCurrentQuestion("intro")}>
              <div className="form-group text-center col-md-6 offset-md-3">
                <h3 className="col-sm-12">Before We Begin...</h3>
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
                  &nbsp;You accept to be contacted by the Big Daddy Mo' Movement 
                </label>
                {/* <p className="col-12 text-center">Nous allons l'utiliser pour imprimer votre certificat</p> */}
              </div>
              <div className="col-12 text-center">
                {this.state.button}
                <p className="error mt-3">{this.state.error}</p>
              </div>
            </Question>

            {
              this.state.questions.map((question, questionKey) => {
                return (
                  <Question key={questionKey} show={this.isCurrentQuestion(questionKey)}>
                    <div className="col-md-8 offset-md-2 text-center">
                      <h3 className="col-sm-12">
                        {question.text}
                      </h3>
                      {
                        question.options.map((option, optionKey) => {
                          return (
                            <Option
                              key={optionKey}
                              label={optionKey}
                              selected={this.isSelected}
                              onClick={this.selectOption}
                              question={questionKey}
                              answer={option.value}
                              value={option.text}
                            />
                          )
                        })
                      }
                    </div>

                  </Question>
                )
              })
            }

          </div>
        </div>
      </div>
    </section>

    return (
      <div>
        {
          this.state.alreadyQuizzed ?
            <div className="text-center">
              <h3>Oups... il semblerait que vous ayez déjà participé.</h3>
              <h3>Une seule participation est autorisée par personne. 🤗</h3>
            </div>
            :
            this.state.endQuiz ?
              <Results score={this.state.score} name={this.state.userName} />
              :
              this.state.questionsLoaded ? quiz : <Loading />
        }
      </div>
    )
  }
}
