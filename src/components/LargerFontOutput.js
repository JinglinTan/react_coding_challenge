import React from "react";

class LargerFontOutput extends React.Component {
  state = { labelText: "Larger font:" };

  render() {
    return (
      <div>
        <label>
          {this.state.labelText}
          <p className="larger-font-p">{this.props.output}</p>
        </label>
      </div>
    );
  }
}

export default LargerFontOutput;
