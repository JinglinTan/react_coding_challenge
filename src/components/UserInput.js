import React from "react";

class UserInput extends React.Component {
  state = { input: "" };

  onInputChange = e => {
    this.setState({ input: e.target.value });
    this.props.passInputToApp(this.state.input);
  };

  render() {
    return (
      <div className="UserInput">
        <label>Please type here:</label>
        <input
          type="text"
          value={this.state.input}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default UserInput;
