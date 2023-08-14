import React, { Component } from "react";
import FirstPage from "./FirstPage.jsx";
import LoadingList from "./LoadingList.jsx";
import ErrorList from "./ErrorList.jsx";
import EmptyList from "./EmptyList.jsx";
import Item from "../Item/index.jsx";

export default class List extends Component {
  render() {
    const {
      state: { isEmpty, isLoading, users, error },
    } = this.props;

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
