import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";

class Random extends Component {
  cameraCapture = p => {
    let capture;

    p.setup = function() {
      p.createCanvas(390, 240);
      capture = p.createCapture("VIDEO");
      capture.size(320, 240);
      //capture.hide();
    };

    p.draw = function() {
      p.background(255);
      p.image(capture, 0, 0, 320, 240);
      p.filter("INVERT");
    };
  };

  render() {
    return <P5Wrapper sketch={this.cameraCapture} />;
  }
}

export default Random;
