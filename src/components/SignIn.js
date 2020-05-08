import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class SignIn extends React.Component {
  state = {
    selectedUser: "",
  };

  onChange = (e) => {
    this.setState({ selectedUser: e.target.value });
  };

  handleSubmit = () => {
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
  };

  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>Sign In</h1>
        <select id="userSelector" onChange={this.onChange}>
          <option value="" disabled selected>
            Select a user
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button
          disabled={this.state.selectedUser === ""}
          onClick={this.handleSubmit}
        >
          Login
        </button>
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
