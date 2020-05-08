import React from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/questions";
import { withRouter } from "react-router-dom";

class PollQuestionCard extends React.Component {
  state = {
    answer: "",
  };

  onChange = (e) => {
    this.setState({ answer: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleSaveAnswer(
        this.state.answer,
        this.props.question.id,
        this.props.authedUser
      )
    );

    this.props.history.push(`/questions/${this.props.question.id}/results`);
  };

  render() {
    if (this.props.question === undefined) {
      this.props.history.push("/");
    }

    const { author, optionOne, optionTwo } = this.props.question;
    // console.log(this.props.question.id);
    return (
      <div className="card m-3 mx-auto ">
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
            <p className="font-weight-bold">Would you rather...</p>
            <form onSubmit={this.handleSubmit}>
              <div className="ml-3">
                <input
                  type="radio"
                  name="answer"
                  id="optionOne"
                  value="optionOne"
                  onChange={this.onChange}
                />
                <label className="ml-2" htmlFor="optionOne">
                  {" "}
                  {optionOne.text}
                </label>
              </div>
              <div className="ml-3">
                <input
                  type="radio"
                  name="answer"
                  id="optionTwo"
                  value="optionTwo"
                  onChange={this.onChange}
                />
                <label className="ml-2" htmlFor="optionTwo">
                  {" "}
                  {optionTwo.text}
                </label>
              </div>
              <br />
              <button
                className="btn btn-success w-100"
                type="submit"
                disabled={this.state.answer === ""}
              >
                Submit
              </button>
            </form>
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

export default withRouter(connect(mapStateToProps)(PollQuestionCard));
