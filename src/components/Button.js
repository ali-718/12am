import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        style={{
          width: 100,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Submit</p>
      </button>
    );
  }
}
