import React from "react";
import LearningHooks from "./app";
import Learning from "./learning";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ""
    };
  }
  handleChange = event => {
    this.setState({ product: event.target.value });
  };
  render() {
    let header = "";
    if (this.state.product) {
      header = <h1>hello, {this.state.product}</h1>;
    } else header = <h1>hello user</h1>;
    return (
      <div>
        {header}
        <h1>Let's stay healthy</h1>
        <h3>Your ingredients</h3>
        <input type="text" onChange={this.handleChange} />
        <br />
        <br />
        <button>Search</button>
        <LearningHooks />
        <Learning />
      </div>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
