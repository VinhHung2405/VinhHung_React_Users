import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

export default class UsersPage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-info my-4">USERS PAGE</h1>
        <Form />
        <List />
      </div>
    );
  }
}

