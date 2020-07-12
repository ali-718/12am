import React, { Component } from "react";

export default class DefaultButton extends Component {
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
        <p>Default</p>
      </button>
    );
  }
}

export class Button extends Component {
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

export class RedButton extends Component {
  render() {
    return (
      <button
        style={{
          width: 100,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        <p>Red Button</p>
      </button>
    );
  }
}
