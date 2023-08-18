import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  render() {
    const { id, userObj } = this.props;

    return (
      <div key={id} className="card">
        <a href={userObj.html_url} target="_blank" rel="noreferrer">
          <img
            alt="head_profile"
            src={userObj.avatar_url}
            style={{ width: "100px" }}
          />
        </a>
        <p className="card-text">{userObj.login}</p>
      </div>
    );
  }
}
