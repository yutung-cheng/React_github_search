import React, { Component } from "react";
import PubSub from "pubsub-js";
import FirstPage from "./FirstPage.jsx";
import LoadingList from "./LoadingList.jsx";
import ErrorList from "./ErrorList.jsx";
import EmptyList from "./EmptyList.jsx";
import Item from "../Item/index.jsx";

export default class List extends Component {
  // initialize users list.
  state = {
    users: [], // All Users data.
    isEmpty: true, // If the list is empty?
    isLoading: false, // If the response is pending?
    error: "", // Store error msg if api request error.
  };

  componentDidMount() {
    this.token = PubSub.subscribe("updateState", (_, stateObj) => {
      this.setState(stateObj);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { isEmpty, isLoading, users, error } = this.state;

    return (
      <div className="row">
        {isEmpty ? (
          <FirstPage />
        ) : isLoading ? (
          <LoadingList />
        ) : error ? (
          <ErrorList error={error} />
        ) : users.length === 0 ? (
          <EmptyList />
        ) : (
          users.map((userObj) => {
            return <Item key={userObj.id} userObj={userObj} />;
          })
        )}
      </div>
    );
  }
}
