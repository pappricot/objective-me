import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import ReactTypingEffect from "react-typing-effect";
import "./Component.css";

const width = window.innerWidth / 2;
const height = window.innerHeight;

class Work extends Component {
  sketch1 = p => {
    // TURTLE STUFF:
    let x, y; // the current position of the turtle
    let currentangle = 0; // which way the turtle is pointing
    let step = 20; // how much the turtle moves with each 'F'
    let angle = 90; // how much the turtle turns with a '-' or '+'

    // LINDENMAYER STUFF (L-SYSTEMS)
    let thestring = "A"; // "axiom" or start of the string
    let numloops = 5; // how many iterations to pre-compute
    let therules = []; // array for rules
    therules[0] = ["A", "-BF+AFA+FB-"]; // first rule
    therules[1] = ["B", "+AF-BFB-FA+"]; // second rule

    let whereinstring = 0; // where in the L-system are we?

    p.setup = function() {
      p.createCanvas(width, height);
      p.background(236, 236, 231);
      p.stroke(0, 0, 0, 255);

      // start the x and y position at lower-left corner
      x = 0;
      y = height - 1;

      // COMPUTE THE L-SYSTEM
      for (let i = 0; i < numloops; i++) {
        thestring = lindenmayer(thestring);
      }
    };

    p.draw = function() {
      // draw the current character in the string:
      drawIt(thestring[whereinstring]);

      // increment the point for where we're reading the string.
      // wrap around at the end.
      whereinstring++;
      if (whereinstring > thestring.length - 1) whereinstring = 0;
    };

    // interpret an L-system
    function lindenmayer(s) {
      let outputstring = ""; // start a blank output string

      // iterate through 'therules' looking for symbol matches:
      for (let i = 0; i < s.length; i++) {
        let ismatch = 0; // by default, no match
        for (let j = 0; j < therules.length; j++) {
          if (s[i] == therules[j][0]) {
            outputstring += therules[j][1]; // write substitution
            ismatch = 1; // we have a match, so don't copy over symbol
            break; // get outta this for() loop
          }
        }
        // if nothing matches, just copy the symbol over.
        if (ismatch == 0) outputstring += s[i];
      }

      return outputstring; // send out the modified string
    }

    // this is a custom function that draws turtle commands
    function drawIt(k) {
      if (k == "F") {
        // draw forward
        // polar to cartesian based on step and currentangle:
        let x1 = x + step * p.cos(p.radians(currentangle));
        let y1 = y + step * p.sin(p.radians(currentangle));
        p.line(x, y, x1, y1); // connect the old and the new

        // update the turtle's position:
        x = x1;
        y = y1;
      } else if (k == "+") {
        currentangle += angle; // turn left
      } else if (k == "-") {
        currentangle -= angle; // turn right
      }

      // give me some random color values:
      let r = p.random(128, 255);
      let g = p.random(0, 192);
      let b = p.random(0, 50);
      let a = p.random(50, 100);

      // pick a gaussian (D&D) distribution for the radius:
      let radius = 0;
      radius += p.random(0, 15);
      radius += p.random(0, 15);
      radius += p.random(0, 15);
      radius = radius / 3;

      // draw the stuff:
      p.fill(r, g, b, a);
      p.ellipse(x, y, radius, radius);
    }
  };
  render() {
    return (
      <div className="container">
        <div className="draw-side">
          <P5Wrapper className="p5" sketch={this.sketch1} />
        </div>
        <div className="text-side">
          <h3>Career path can also be zigzaggy</h3>
          <p>
            People have a notion of a career ladder, that skillsets and
            experiences should bring you up and up. And though I agree that
            patience and time perfects you at a skillset, it does not make you a
            well rounded person. And, as I experinced different educational
            background, I also experienced a difference in working culture.
            <br />
            <br />
            brr to be filled
            <br />
            <br />
            <br />
            <br />
            <ReactTypingEffect text="sth deep here" eraseDelay="2500" />
          </p>
        </div>
      </div>
    );
  }
}

export default Work;
