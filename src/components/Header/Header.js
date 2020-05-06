import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blacken: false
    };
  }

  componentDidMount() {
    this.watchScroll();
  }

  watchScroll = () => {
    window.addEventListener("scroll", (scrollevent) => {
      this.setState({
        blacken: document.body.scrollTop >= 200
      });
    });
  }

  render = () => (
    <div 
      className={`header ${this.props.shouldDarken ? "blackened-header" : "transparent-header"} ${this.state.blacken ? "blacken" : ""}`}
    >
      <button className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className="spacer"></div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Our Products</Link>
      </div> 
    </div>
  );
}
