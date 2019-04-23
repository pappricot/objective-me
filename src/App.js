import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";
import Random from "./components/Random";
import { AnimatedRoute } from "react-router-transition";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <AnimatedRoute
          path="/About"
          component={About}
          atEnter={{ offset: -100 }}
          atLeave={{ offset: -100 }}
          atActive={{ offset: 0 }}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`
          })}
        />
        <AnimatedRoute
          path="/Education"
          component={Education}
          atEnter={{ offset: -100 }}
          atLeave={{ offset: -100 }}
          atActive={{ offset: 0 }}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`
          })}
        />
        <AnimatedRoute
          path="/Work"
          component={Work}
          atEnter={{ offset: -100 }}
          atLeave={{ offset: -100 }}
          atActive={{ offset: 0 }}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`
          })}
        />
        <AnimatedRoute
          path="/Random"
          component={Random}
          atEnter={{ offset: -100 }}
          atLeave={{ offset: -100 }}
          atActive={{ offset: 0 }}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`
          })}
        />
      </Router>
    );
  }
}

export default App;
