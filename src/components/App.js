import "./CSS/App.css";
import React from "react";
import UserInput from "./UserInput";
import BackwardOutput from "./BackwardOutput";
import AllCapsOutput from "./AllCapsOutput";

class App extends React.Component {
  state = { input: "", backwardOutput: "", allCapsOutput: "" };

  onChange = userInput => {
    let backwardText = this.reverseInput(userInput);
    let allCapsText = this.turnAllCaps(userInput);
    this.setState({
      input: userInput,
      backwardOutput: backwardText,
      allCapsOutput: allCapsText
    });
  };

  reverseInput = userInput => {
    return userInput
      .split("")
      .reverse()
      .join("");
  };

  turnAllCaps = userInput => {
    return userInput.toUpperCase();
  };

  render() {
    return (
      <div className="app">
        <div className="input">
          <UserInput passInputToApp={this.onChange} />
        </div>
        <div className="output">
          <BackwardOutput output={this.state.backwardOutput} />
          <AllCapsOutput output={this.state.allCapsOutput} />
        </div>
      </div>
    );
  }
}

export default App;
