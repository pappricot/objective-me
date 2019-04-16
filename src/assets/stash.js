import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import "./App.css";

import About from "./components/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // left: "",
      // top: ""
      // x: 0,
      // y: 0
    };
    // this.onMouseMove = this.onMouseMove.bind(this);
  }

  // onMouseMove(e) {
  //   this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  //   //const node = ReactDOM.findDOMNode(this);
  //   //alert(node);
  //   //const position = node.querySelector("div.pointer").getBoundingClientRect();
  //   // alert(position);
  //   // this.setState({
  //   //   left: position.left,
  //   //   top: position.top
  //   // });
  // }

  render() {
    return (
      <div className="body">
        <div className="header">
          <h2>
            <ReactTypingEffect text="No nonsense page..." eraseDelay="2500" />
          </h2>
        </div>
        <div className="container">
          <section
            className="section"
            // onMouseMove={e => {
            //   this.onMouseMove(e);
            // }}
          >
            <div className="pointer" ref="pointer" />

            <h1 style={{ flex: 1 }}>Pappricot Page</h1>
            <div style={{ flexDirection: "column", flex: 2 }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="buttonLeft">
                <Link to="/About">Link Button</Link>
              </button>
            </div>
          </section>
          <section
            className="section"
            // onMouseMove={e => {
            //   this.onMouseMove(e);
            // }}
          >
            <div className="pointer" ref="pointer" />
            <div style={{ flexDirection: "column", flex: 2 }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="buttonRight">Link Button</button>
            </div>
            <h1 style={{ flex: 1 }}>Profy work</h1>
          </section>
          <section
            className="section"
            // onMouseMove={e => {
            //   this.onMouseMove(e);
            // }}
          >
            <h1 style={{ flex: 1 }}>Education education education</h1>
            <div style={{ flexDirection: "column", flex: 2 }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="buttonLeft">Link Button</button>
            </div>
            <div className="pointer" ref="pointer" />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
