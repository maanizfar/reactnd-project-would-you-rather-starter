import React from "react";

class UserStatCard extends React.Component {
  render() {
    const { name, answers, questions, score } = this.props;
    return (
      <div className="container border border-success m-3">
        <h3>{name}</h3>
        <p>Polls answered: {answers}</p>
        <p>Polls created: {questions}</p>
        <p>Score: {score}</p>
      </div>
    );
  }
}

export default UserStatCard;
