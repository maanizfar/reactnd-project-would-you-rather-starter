import React from "react";
import { connect } from "react-redux";
import "./PollResultCard.css";
import { withRouter } from "react-router-dom";

class OptionResult extends React.Component {
  render() {
    return (
      <div className="card m-3">
        {this.props.authedUserVoted && (
          <div className="card-header bg-info text-light">Your vote</div>
        )}
        <div className="card-body p-3">
          <p className="font-weight-bold">{this.props.text}</p>
          <div
            className="progress"
            style={{
              height: "32px",
            }}
          >
            <span
              className="progress-value font-weight-bold"
              style={{ fontSize: "1.2rem" }}
            >
              {parseFloat(this.props.percentage)}%
            </span>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: this.props.percentage + "%",
                backgroundColor: "lightblue",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p className="text-center font-weight-bolder">
            {this.props.votes} out of {this.props.totalVotes} votes
          </p>
        </div>
      </div>
    );
  }
}

class PollResultCard extends React.Component {
  render() {
    const { author, optionOne, optionTwo } = this.props.question;
    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOneVotePercentage = (
      100 *
      (optionOneVotes / totalVotes)
    ).toFixed(2);
    const optionTwoVotePercentage = (
      100 *
      (optionTwoVotes / totalVotes)
    ).toFixed(2);
    const { authedUser } = this.props;

    return (
      <div className="card m-3">
        <div className="card-header">{author} asks:</div>
        <div className="card-body d-flex">
          <div>
            <img
              src={this.props.avatarURL}
              alt="avatar"
              width="160px"
              height="160px"
            />
          </div>
          <div className="mx-4 w-100">
            <h4 className="font-weight-bold">Results:</h4>
            <p>Would you rather</p>

            <OptionResult
              text={optionOne.text}
              percentage={optionOneVotePercentage}
              votes={optionOneVotes}
              totalVotes={totalVotes}
              authedUserVoted={optionOne.votes.includes(authedUser)}
            />

            <OptionResult
              text={optionTwo.text}
              percentage={optionTwoVotePercentage}
              votes={optionTwoVotes}
              totalVotes={totalVotes}
              authedUserVoted={optionTwo.votes.includes(authedUser)}
            />
            <div className="d-flex px-3">
              <button
                className="btn btn-secondary  ml-auto"
                onClick={() => this.props.history.push("/")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { match }) {
  const question = questions[match.params.id];
  return {
    authedUser,
    question: question,
    avatarURL: users[question.author].avatarURL,
  };
}

export default withRouter(connect(mapStateToProps)(PollResultCard));
