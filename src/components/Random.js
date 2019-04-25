import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import ReactTypingEffect from "react-typing-effect";
import "./Component.css";

const fontstyle = require("../assets/MiriamLibre-Regular.ttf");
const width = window.innerWidth / 2;
const height = window.innerHeight;

class Random extends Component {
  sketch1 = p => {
    let message = "tickle",
      font,
      bounds, // holds x, y, w, h of the text's bounding box
      fontsize = 100,
      x,
      y; // x and y coordinates of the text

    p.preload = function() {
      font = p.loadFont(fontstyle);
    };

    p.setup = function() {
      p.createCanvas(width, height);

      // set up the font
      p.textFont(font);
      p.textSize(fontsize);

      // get the width and height of the text so we can center it initially
      bounds = font.textBounds(message, 0, 0, fontsize);
      x = width / 2 - bounds.w / 2;
      y = height / 2 - bounds.h / 2;
    };

    p.draw = function() {
      p.background(233, 97, 81);

      // write the text in black and get its bounding box

      p.fill(255);
      p.text(message, x, y);
      bounds = font.textBounds(message, x, y, fontsize);

      // check if the mouse is inside the bounding box and tickle if so
      if (
        p.mouseX >= bounds.x &&
        p.mouseX <= bounds.x + bounds.w &&
        p.mouseY >= bounds.y &&
        p.mouseY <= bounds.y + bounds.h
      ) {
        x += p.random(-5, 5);
        y += p.random(-5, 5);
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
          <h3>the random fact is..</h3>
          <p>
            I'm terrified of tickles ;(
            <br />
            <br />
            (hover over the word!)
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

export default Random;
