import React, { Component } from "react";
import { connect } from "react-redux";
import BTN from "../Comonents/buttonsubmit";
class endgame extends Component {
  render() {
    console.log("core end game", this.props.core.todos.App.core);
    // console.log("core end game", this.props.core.text);

    return (
      <div className="finish">
        <h5>Complete</h5>
        <h1>Sore:{this.props.core.todos.App.core}</h1>
        <h3>Thank for your time</h3>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  core: state,
});

export default connect(mapStateToProps, null)(endgame);
