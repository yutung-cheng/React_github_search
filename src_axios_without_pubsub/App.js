import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

export default class App extends Component {
  // initialize users list.
  state = {
    users: [], // All Users data.
    isEmpty: true, // If the list is empty?
    isLoading: false, // If the response is pending?
    error: "", // Store error msg if api request error.
  };

  // Old version without consider "isEmpty", "isLoading", and "error"
  /*
  saveUsers = (users) => {
    //this.setState({ users : users }); Same result as below.
    this.setState({ users });
  };
  */

  // New version including "isEmpty", "isLoading", and "error"
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List state={this.state} />
      </div>
    );
  }
}
