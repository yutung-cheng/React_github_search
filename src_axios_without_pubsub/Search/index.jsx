import React, { Component } from "react";
import axios from "axios";

/// Github search api
const api = "https://api.github.com/search/users?q=";

export default class Search extends Component {
  search = () => {
    // 1. Receive user input values.
    const {
      keywordElement: { value: keyword }, // value: "Rename"
    } = this;

    // Before sending request, ask App to update state.
    const { updateAppState } = this.props;
    updateAppState({ isEmpty: false, isLoading: true });

    // 2. Fetch axios requests.
    axios.get(api + keyword).then(
      (response) => {
        // If request success, announce app update it's state.
        updateAppState({ users: response.data.items, isLoading: false });
        this.keywordElement.value = ""; // Clear input value.
      },
      // If request failed, announce app update it's state.
      (error) => {
        updateAppState({ isLoading: false, error: error.message });
        this.keywordElement.value = ""; // Clear input value.
      }
    );
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keywordElement = c)}
            type="text"
            placeholder="Enter name"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
