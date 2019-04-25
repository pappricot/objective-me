import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import P5Wrapper from "react-p5-wrapper";
import "./App.css";

class Home extends Component {
  sketch1 = p => {
    p.setup = function() {
      p.createCanvas(500, 500);
      p.background(54, 103, 116);
    };

    p.draw = function() {
      if (p.mouseIsPressed) {
        p.fill(233, 97, 82);
        p.stroke(54, 103, 116);
      } else {
        p.fill(54, 103, 116);
        p.stroke(233, 97, 82);
      }
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
    };
  };

  sketch2 = p => {
    p.setup = function() {
      p.createCanvas(500, 500);
      p.background(236, 236, 231);
    };

    p.draw = function() {
      if (p.mouseIsPressed) {
        p.fill(233, 97, 82);
        p.stroke(54, 103, 116);
      } else {
        p.fill(54, 103, 116);
        p.stroke(233, 97, 82);
      }
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
    };
  };

  sketch3 = p => {
    p.setup = function() {
      p.createCanvas(500, 500);
      p.background(236, 236, 231);
    };

    p.draw = function() {
      if (p.mouseIsPressed) {
        p.fill(233, 97, 82);
        p.stroke(54, 103, 116);
      } else {
        p.fill(54, 103, 116);
        p.stroke(233, 97, 82);
      }
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
    };
  };

  sketch4 = p => {
    p.setup = function() {
      p.createCanvas(500, 500);
      p.background(54, 103, 116);
    };

    p.draw = function() {
      if (p.mouseIsPressed) {
        p.fill(233, 97, 82);
        p.stroke(54, 103, 116);
      } else {
        p.fill(54, 103, 116);
        p.stroke(233, 97, 82);
      }
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
    };
  };

  render() {
    return (
      <div className="app">
        <div className="box-container">
          <section className="canvas1">
            <P5Wrapper className="p5" sketch={this.sketch1} />
            <div className="box-title">
              <h2>
                <Link to="/About" className="box-title-text">
                  Objective opinion about me
                </Link>
              </h2>
            </div>
          </section>

          <section className="explanation">
            <h2 className="explanation">
              <ReactTypingEffect text="Poke around" eraseDelay="2500" />
            </h2>
          </section>
          <section className="canvas1">
            <P5Wrapper className="p5" sketch={this.sketch2} />
            <div className="box-title-light">
              <h2>
                <Link to="/Education" className="box-title-text">
                  Questionable past about me
                </Link>
              </h2>
            </div>
          </section>
        </div>

        <div className="center">
          <h1>
            <ReactTypingEffect text="No nonsense page" eraseDelay="2500" />
          </h1>
        </div>
        <div className="box-container">
          <section className="canvas1">
            <P5Wrapper className="p5" sketch={this.sketch3} />
            <div className="box-title-light">
              <h2>
                <Link to="/Work" className="box-title-text">
                  Level of professionalism
                </Link>
              </h2>
            </div>
          </section>
          <section className="explanation">
            <h2 className="explanation">
              <ReactTypingEffect text="Poke around" eraseDelay="2500" />
            </h2>
          </section>
          <section className="canvas1">
            <P5Wrapper className="p5" sketch={this.sketch4} />
            <div className="box-title">
              <h2>
                <Link to="/Random" className="box-title-text">
                  Wholesome randomness
                </Link>
              </h2>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
