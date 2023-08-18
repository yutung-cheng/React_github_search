import React, { Component } from "react";

export default class ErrorList extends Component {
  render() {
    const { error } = this.props;

    return <h2 style={{ color: "red" }}>{error}</h2>;
  }
}
