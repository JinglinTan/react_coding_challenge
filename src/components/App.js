import React from "react";
import UserInput from "./UserInput";

class App extends React.Component {
  state = { input: "" };

  onChange = userInput => {
    this.setState({ input: userInput });
    console.log(this.state.input);
  };

  render() {
    return (
      <div className="App">
        <UserInput passInputToApp={this.onChange} />
      </div>
    );
  }
}

export default App;
