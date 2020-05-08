import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class SignIn extends React.Component {
  state = {
    selectedUser: "",
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ selectedUser: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
  };

  render() {
    const { users } = this.props;

    return (
      <div className="container">
        <div className="mt-5 mx-auto w-75">
          <h1 className="display-5 text-center text-success">
            Would You Rather!
          </h1>
          <h3 className="text-center text-success mt-5">Sign in to continue</h3>
          <form className="m-4">
            <div className="form-group">
              <select
                className="form-control"
                defaultValue=""
                onChange={this.onChange}
              >
                <option value="" disabled>
                  Select a user
                </option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
              <button
                className="form-control mt-2 btn btn-success"
                disabled={this.state.selectedUser === ""}
                onClick={this.handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(SignIn);
