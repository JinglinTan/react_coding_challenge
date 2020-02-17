import React from "react";

class BackwardOutput extends React.Component {
  state = { labelText: "Backwards: " };

  render() {
    return (
      <div>
        <label>
          {this.state.labelText}
          <p>{this.props.output}</p>
        </label>
      </div>
    );
  }
}

export default BackwardOutput;
