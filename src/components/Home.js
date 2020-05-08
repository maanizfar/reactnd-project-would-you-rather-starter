import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import PollCard from "./PollCard";

class Home extends React.Component {
  state = {
    showAnswered: false,
  };

  //TODO: Remove this
  componentDidMount() {
    this.props.dispatch(setAuthedUser("sarahedo"));
  }

  changePollList = (showAnswered) => {
    this.setState({ showAnswered });
  };

  render() {
    const { showAnswered } = this.state;
    const { answeredQuestions, unAnsweredQuestions } = this.props;
    const polls = showAnswered ? answeredQuestions : unAnsweredQuestions;

    return (
      <div className="container border w-70">
        <button
          className={
            showAnswered ? "btn btn-secondary w-50" : "btn btn-primary w-50"
          }
          onClick={() => this.changePollList(false)}
        >
          Unanswered
        </button>

        <button
          className={
            showAnswered ? "btn btn-primary w-50" : "btn btn-secondary w-50"
          }
          onClick={() => this.changePollList(true)}
        >
          Answered
        </button>

        {polls.map((poll) => {
          return (
            <PollCard
              key={poll.id}
              author={poll.author}
              optionOne={poll.optionOne.text}
              answered={showAnswered}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  const questionsArray = Object.values(questions);
  const answeredQuestions = questionsArray.filter(
    (q) => q.author === authedUser
  );
  const unAnsweredQuestions = questionsArray.filter(
    (q) => q.author !== authedUser
  );
  return {
    answeredQuestions,
    unAnsweredQuestions,
  };
}

export default connect(mapStateToProps)(Home);
