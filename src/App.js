import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";
import Random from "./components/Random";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Education" component={Education} />
        <Route path="/Work" component={Work} />
        <Route path="/Random" component={Random} />
      </Router>
    );
  }
}

export default App;
