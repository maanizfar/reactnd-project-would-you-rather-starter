import React from "react";
import { connect } from "react-redux";
import UserStatCard from "./UserStatCard";

class Leaderboard extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map((user) => (
          <UserStatCard
            key={user.id}
            name={user.name}
            answers={user.answerScore}
            questions={user.questionScore}
            score={user.totalScore}
            avatarURL={user.avatarURL}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const data = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerScore: Object.values(user.answers).length,
      questionScore: user.questions.length,
      totalScore: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, 3);
  return { data };
}

export default connect(mapStateToProps)(Leaderboard);
