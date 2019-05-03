import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import ReactTypingEffect from "react-typing-effect";
import "./Component.css";

const width = window.innerWidth / 2;
const height = window.innerHeight;

class About extends Component {
  sketch1 = p => {
    let num = 2000;
    let range = 6;

    let ax = [];
    let ay = [];

    p.setup = function() {
      p.createCanvas(width, height);
      for (let i = 0; i < num; i++) {
        ax[i] = width / 2;
        ay[i] = height / 2;
      }
      p.frameRate(30);
    };

    p.draw = function() {
      p.background(233, 97, 81);

      // Shift all elements 1 place to the left
      for (let i = 1; i < num; i++) {
        ax[i - 1] = ax[i];
        ay[i - 1] = ay[i];
      }

      // Put a new value at the end of the array
      ax[num - 1] += p.random(-range, range);
      ay[num - 1] += p.random(-range, range);

      // Constrain all points to the screen
      ax[num - 1] = p.constrain(ax[num - 1], 0, width);
      ay[num - 1] = p.constrain(ay[num - 1], 0, height);

      // Draw a line connecting the points
      for (let j = 1; j < num; j++) {
        let val = (j / num) * 204.0 + 51;
        p.stroke(val);
        p.line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
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
          <h3>About me..</h3>
          <p className="p-text">
            This Brownian motion summarizes perfectly collisions of events that
            shaped my life path. I make plans, and life challenges them. I
            started off as an artist, life dragged me to study business. I
            received my business diploma after 5 years, and got a job as a
            Digital Marketer at Haravrd Innovation Lab. I picked up interest in
            creating mock ups, and got my next gig at a digital agency.
            <br />
            <br />
            My zigzagy path didn't stop evolving and turned my ineterst deeper
            towards coding, dabbing here and there for friens' projects, and
            finally landing a job to become a mobile developer: thanks to my so
            cald "charity" work by my parents, my friend's dad has been
            observing my work with his son's project and kindly offered me this
            paid gig!
            <br />
            <br />
            <br />
            <br />
            <ReactTypingEffect
              text="Wisdom of the day (and the rest of my life :) : Kindness pays off "
              eraseDelay="2500"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default About;
