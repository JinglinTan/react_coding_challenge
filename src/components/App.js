import "./App.css";
import React from "react";
import UserInput from "./UserInput";
import BackwardOutput from "./BackwardOutput";

class App extends React.Component {
  state = { input: "", backwardOutput: "" };

  onChange = userInput => {
    let backwards = this.reverseInput(userInput);
    this.setState({ input: userInput, backwardOutput: backwards });
  };

  reverseInput = userInput => {
    return userInput
      .split("")
      .reverse()
      .join("");
  };

  render() {
    return (
      <div className="app">
        <div className="input">
          <UserInput passInputToApp={this.onChange} />
        </div>
        <div className="output">
          <BackwardOutput output={this.state.backwardOutput} />
        </div>
      </div>
    );
  }
}

export default App;
