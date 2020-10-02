import React, { ReactDOM } from "react";
import logo from "./logo.svg";
import "./App.css";
import VanGoghImg from "./vangogh";

class ReuseableForm extends React.Component {
  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        {this.props.children(this.handleChange)}
        <input type="submit" />
      </form>
    );
  }
}

// ReuseableForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   children: PropTypes.any
// };

export default ReuseableForm;
