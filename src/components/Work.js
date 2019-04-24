import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import ReactTypingEffect from "react-typing-effect";
import "./Component.css";

const width = window.innerWidth / 2;
const height = window.innerHeight;

class Work extends Component {
  sketch1 = p => {
    let theta;
    p.setup = function() {
      p.createCanvas(width, height);
    };

    p.draw = function() {
      p.background(233, 97, 81);
      p.frameRate(30);
      p.stroke(255);
      // Let's pick an angle 0 to 90 degrees based on the mouse position
      let a = (p.mouseX / width) * 90;
      // Convert it to radians
      theta = p.radians(a);
      // Start the tree from the middle of the screen - changed height /1.5 instaed of height
      p.translate(width / 2, height / 1.5);
      // Draw a line 120 pixels
      p.line(0, 0, 0, -120);
      // Move to the end of that line
      p.translate(0, -120);
      // Start the recursive branching!
      p.branch(120);
    };

    p.branch = function(h) {
      // Each branch will be 2/3rds the size of the previous one
      h *= 0.66;

      // All recursive functions must have an exit condition!!!!
      // Here, ours is when the length of the branch is 2 pixels or less
      if (h > 2) {
        p.push(); // Save the current state of transformation (i.e. where are we now)
        p.rotate(theta); // Rotate by theta
        p.line(0, 0, 0, -h); // Draw the branch
        p.translate(0, -h); // Move to the end of the branch
        p.branch(h); // Ok, now call myself to draw two new branches!!
        p.pop(); // Whenever we get back here, we "pop" in order to restore the previous matrix state

        // Repeat the same thing, only branch off to the "left" this time!
        p.push();
        p.rotate(-theta);
        p.line(0, 0, 0, -h);
        p.translate(0, -h);
        p.branch(h);
        p.pop();
      }
    };
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
