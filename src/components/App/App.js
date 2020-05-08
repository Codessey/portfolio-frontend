import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContactDetails } from "../ContactDetails/ContactDetails";
import { Header } from "../Header/Header";
import {About} from "../About/About";
import "./App.css";
import json from "../../data/contact.json";

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        phone_number: "",
        greeting: "",
        email: ""
      }
    }
  }

  componentDidMount() {
    const data = json;
    this.setState({ data });
  }

  render = () => (
    <div>
      <ContactDetails 
        greeting={this.state.data.greeting} 
        email={this.state.data.email} 
        phoneNumber={this.state.data.phone_number} 
      />
      <Router>
        <Header shouldDarken={true} />
      </Router>
      <About />
    </div>
  );
}
