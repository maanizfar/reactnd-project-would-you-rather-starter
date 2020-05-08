import React from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { setAuthedUser } from "../actions/authedUser";

class CreatePoll extends React.Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  //TODO: REMOVE THIS
  componentDidMount() {
    this.props.dispatch(setAuthedUser("sarahedo"));
  }

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
    this.setState({ optionOne: "", optionTwo: "" });
  };

  render() {
    // console.log(this.state);
    const { optionOne, optionTwo } = this.state;

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
