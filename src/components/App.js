import React, { Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import CreatePoll from "./CreatePoll";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import PollResultCard from "./PollResultCard";
import PollQuestionCard from "./PollQuestionCard";
import Nav from "./Nav";
import Error404 from "./Error404";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <div className="App">
        {authedUser === null ? (
          <Route component={SignIn} />
        ) : (
          <Fragment>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add" component={CreatePoll} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route exact path="/questions/:id" component={PollQuestionCard} />
              <Route
                exact
                path="/questions/:id/results"
                component={PollResultCard}
              />
              <Route component={Error404} />
            </Switch>
          </Fragment>
        )}
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
