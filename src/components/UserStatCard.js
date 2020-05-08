import React from "react";

class UserStatCard extends React.Component {
  render() {
    const { name, answers, questions, score, avatarURL } = this.props;
    return (
      <div className="card border border-success p-3 m-3  d-flex flex-row">
        <div>
          <img src={avatarURL} width="160px" height="160px" />
        </div>
        <div className="card-body w-100">
          <h3 className="card-title font-weight-bold">{name}</h3>
          <p>
            Polls Answered:
            <span className="font-weight-bolder"> {answers}</span>
          </p>

          <p>
            Polls Created:
            <span className="font-weight-bolder"> {questions}</span>
          </p>
        </div>
        <div>
          <div className="card h-100 ">
            <div className="card-header">Score</div>
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="text-center font-weight-bold display-4">{score}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserStatCard;
