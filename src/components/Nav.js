import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class Nav extends React.Component {
  logout = () => {
    this.props.dispatch(setAuthedUser(null));
  };

  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="navbar-nav mr-auto">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>

          <Link to="/add" className="nav-item nav-link">
            New Poll
          </Link>
          <Link to="/leaderboard" className="nav-item nav-link">
            Leaderboard
          </Link>
        </div>
        {user && (
          <div className="navbar-nav ml-auto">
            <div className="mx-4">
              <img
                src={user.avatarURL}
                width="40px"
                height="40px"
                className="p-1 mx-1"
                alt="avatar"
              />
              <span className="text-light">{user.name}</span>
            </div>
            <button className="btn btn-danger" onClick={this.logout}>
              Logout
            </button>
          </div>
        )}
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(Nav);
