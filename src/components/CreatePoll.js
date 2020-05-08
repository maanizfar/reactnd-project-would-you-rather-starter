import React from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class CreatePoll extends React.Component {
  state = {
    optionOne: "",
    optionTwo: "",
    submitted: false,
  };

  onChange = (option, value) => {
    this.setState({
      [option]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    this.props.dispatch(
      handleAddQuestion(this.props.authedUser, optionOne, optionTwo)
    );
    this.setState({ optionOne: "", optionTwo: "", submitted: true });
  };

  render() {
    const { submitted, optionOne, optionTwo } = this.state;

    if (submitted) return <Redirect to="/" />;

    return (
      <div className="container">
        <div className="card">
          <div className="card-header">Create new poll</div>
          <div className="card-body">
            <div className="card-title">Would you rather..</div>
            <form onSubmit={this.handleSubmit}>
              <input
                value={optionOne}
                type="text"
                className="form-control"
                placeholder="Enter option one..."
                onChange={(e) => this.onChange("optionOne", e.target.value)}
              />

              <div className="text-center m-2">- OR -</div>

              <input
                value={optionTwo}
                type="text"
                className="form-control"
                placeholder="Enter option two..."
                onChange={(e) => this.onChange("optionTwo", e.target.value)}
              />
              <br />
              <button
                className="btn btn-success form-control"
                type="submit"
                disabled={optionOne === "" || optionTwo === ""}
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

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(CreatePoll);
