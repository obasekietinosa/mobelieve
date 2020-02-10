import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import Home from '../Home/Home';
import Header from '../Header/Header';
import Default from '../Default';
import Results from '../Results/Results';
import Footer from '../Footer/Footer';
import Quiz from '../Question/Quiz';
import HighScores from '../HighScores/HighScores';

class App extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/trivia" component={Quiz} />
            <Route path="/results" component={Results} />
            <Route path="/high-scores" render={(props) => <HighScores limit={50} />} />
            <Route component={Default} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
