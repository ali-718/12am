import React, { Component } from "react";

export default class TodoListComponent extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem", marginTop: 20 }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.task}</h5>
          <p className="card-text">{this.props.day}</p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
