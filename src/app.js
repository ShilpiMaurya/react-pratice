import React from "react";
export default class LearningHooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  buttonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // mouseOverHandler = () => {
  //   console.log("i came second");
  // };
  // componentDidMount() {
  //   console.log("im first");
  //   document.addEventListener("mouseover", this.mouseOverHandler);
  // }
  // componentDidUpdate() {
  //   console.log(`button has been clicked ${this.state.count} times`);
  // }
  // componentWillUnmount() {
  //   document.removeEventListener("mouseover", this.mouseOverHandler);
  // }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.buttonClick}>Click me!!!</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
