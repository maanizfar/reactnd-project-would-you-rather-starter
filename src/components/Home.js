import React from "react";
import { connect } from "react-redux";
import PollCard from "./PollCard";

class Home extends React.Component {
  state = {
    showAnswered: false,
  };

  changePollList = (showAnswered) => {
    this.setState({ showAnswered });
  };

  render() {
    const { showAnswered } = this.state;
    const { answeredQuestions, unAnsweredQuestions } = this.props;
    const polls = showAnswered ? answeredQuestions : unAnsweredQuestions;

    return (
      <div className="container border">
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

        {polls.length === 0 && (
          <p className="text-center m-4">Polls not available</p>
        )}
        {polls.map((poll) => {
          return (
            <PollCard
              key={poll.id}
              id={poll.id}
              author={poll.author}
              optionOne={poll.optionOne.text}
              answered={showAnswered}
              avatarURL={this.props.users[poll.author].avatarURL}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const questionsArray = Object.values(questions);
  const user = users[authedUser];
  const answeredQuestionsIds = Object.keys(user.answers);
  const answeredQuestions = answeredQuestionsIds
    .map((id) => questions[id])
    .sort((a, b) => b.timestamp - a.timestamp);
  const unAnsweredQuestions = questionsArray
    .filter((q) => !answeredQuestionsIds.includes(q.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    answeredQuestions,
    unAnsweredQuestions,
    users,
  };
}

export default connect(mapStateToProps)(Home);
