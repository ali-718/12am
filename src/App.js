import React, { Component } from "react";
import Ali, { Button as Fast, RedButton } from "./components/Button";
import TodoListComponent from "./components/TodoListComponent";

class App extends Component {
  state = {
    name: "Ali Haider",
    age: 21,
    color: "blue",
    todo: [
      { day: "monday", task: "play games" },
      { day: "tuesday", task: "study hard" },
      { day: "wednesday", task: "do some chores" },
      { day: "thursday", task: "go shopping" },
    ],
  };

  changeName = () => {
    // this.state["name"] = "Bilal";
    // console.log(this.state);

    this.setState({ name: "Bilal" });
  };

  changeColor = (color) => {
    this.setState({ color: color });
  };

  render() {
    return (
      <>
        {/* style="font-size:30px;background-color:red" */}
        {/* <h1 style={{ fontSize: 30, backgroundColor: "red", margin: "10%" }}>
          Ali Haider
        </h1>{" "} */}

        <div
          style={{
            width: "100%",
            height: 300,
            backgroundColor: "brown",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <h1>{this.state.name}</h1>
          <h1>{this.state.age}</h1>
        </div>
        {/* <input placeholder value /> */}
        <button onClick={this.changeName}>Change Name</button>
        <Ali></Ali>
        <Fast></Fast>

        <RedButton
          change={(color) => this.changeColor(color)}
          name={`I am ${this.state.color}`}
          color={this.state.color}
        ></RedButton>

        <h1>Bilal</h1>
        <div className="jumbotron">
          <h1 className="display-4">Happy Birthday Ali!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>

        {/* todo display */}

        <div style={{ margin: 20 }}>
          {this.state.todo.map((item) => {
            if (item.day == "tuesday") {
              return <TodoListComponent task={item.task} day={item.day} />;
            }
          })}
        </div>
      </>
    );
  }
}

export default App;
