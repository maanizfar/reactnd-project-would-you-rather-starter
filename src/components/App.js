import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import SignIn from "./SignIn";
import CreatePoll from "./CreatePoll";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import PollResultCard from "./PollResultCard";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <PollResultCard
          question={{
            id: "6ni6ok3ym7mf1p33lnez",
            author: "johndoe",
            timestamp: 1468479767190,
            optionOne: {
              votes: ["sarahedo"],
              text: "become a superhero",
            },
            optionTwo: {
              votes: ["johndoe"],
              text: "become a supervillain",
            },
          }}
        />
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
