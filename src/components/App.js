import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import SignIn from "./SignIn";
import CreatePoll from "./CreatePoll";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <CreatePoll />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
