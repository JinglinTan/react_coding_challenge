import React from "react";

class UserInput extends React.Component {
  state = { labelText: "Please type here: " };

  onInputChange = e => {
    this.props.passInputToApp(e.target.value);
  };

  render() {
    return (
      <div>
        <label>
          {this.state.labelText}
          <input
            className="input_bar"
            type="text"
            onChange={this.onInputChange}
          />
        </label>
      </div>
    );
  }
}

export default UserInput;
