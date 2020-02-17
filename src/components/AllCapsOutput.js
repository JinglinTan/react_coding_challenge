import React from "react";

class AllCapsOutput extends React.Component {
  state = { labelText: "All caps: " };

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

export default AllCapsOutput;
