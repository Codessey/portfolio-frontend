import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ContactDetails.css";

const styles = {
  marginize: {
    marginRight: "2em"
  }
};

export class ContactDetails extends Component {
  static propTypes = {
    greeting: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render = () => (
    <div className="white-bg flexed fixed wide">
      <span>{this.props.greeting}</span>
      <div className="separator"></div>
      <span style={styles.marginize}>{this.props.email}</span>
      <span>{this.props.phoneNumber}</span>
    </div>
  );
}
