import React, { Component } from "react";
import Button from "./components/Button";

class App extends Component {
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
          <h1>Ali</h1>
        </div>
        <Button></Button>
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
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default App;
