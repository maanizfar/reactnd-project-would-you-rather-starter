import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import "./PollResultCard.css";

class PollResultCard extends React.Component {
  //TODO: Remove this
  componentDidMount() {
    this.props.dispatch(setAuthedUser("sarahedo"));
  }

  render() {
    const { author, optionOne, optionTwo } = this.props.question;
    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOneVotePercentage = 100 * (optionOneVotes / totalVotes);
    const optionTwoVotePercentage = 100 * (optionTwoVotes / totalVotes);
    const { authedUser } = this.props;

    return (
      <div className="card m-3">
        <div className="card-header">{author} asks:</div>
        <div className="card-body">
          <h4 className="card-title">Results:</h4>
          <p>Would you rather</p>
          <p className="text-center">{optionOne.text}</p>
          <div
            class="progress"
            style={{
              height: "32px",
            }}
          >
            <span
              class="progress-value font-weight-bold"
              style={{ fontSize: "1.3rem" }}
            >
              {optionOneVotePercentage}%
            </span>
            <div
              class="progress-bar"
              role="progressbar"
              style={{
                width: optionOneVotePercentage + "%",
                backgroundColor: "gray",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p className="text-center">
            {optionOne.votes.length} out of {totalVotes}
          </p>
          {optionOne.votes.includes(authedUser) && (
            <p className="text-center">YOUR VOTE</p>
          )}
          <p className="text-center">or...</p>
          <p className="text-center">{optionTwo.text}</p>
          <div
            class="progress"
            style={{
              height: "32px",
            }}
          >
            <span
              class="progress-value font-weight-bold"
              style={{ fontSize: "1.3rem" }}
            >
              {optionTwoVotePercentage}%
            </span>
            <div
              class="progress-bar"
              role="progressbar"
              style={{
                width: optionTwoVotePercentage + "%",
                backgroundColor: "gray",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p className="text-center">
            {optionTwo.votes.length} out of {totalVotes}
          </p>
          {optionTwo.votes.includes(authedUser) && (
            <p className="text-center">YOUR VOTE</p>
          )}
        </div>
        <button className="btn btn-secondary">Back</button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(PollResultCard);
