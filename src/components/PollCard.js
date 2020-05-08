import React from "react";
import { Link } from "react-router-dom";

class PollCard extends React.Component {
  render() {
    const { id, author, optionOne, answered, avatarURL } = this.props;
    return (
      <div className="card m-3 mx-auto">
        <div className="card-header">{author} asks:</div>
        <div className="card-body d-flex">
          <div>
            <img src={avatarURL} width="160px" height="160px" />
          </div>
          <div className="mx-4 w-100">
            <p className="font-weight-bold">Would you rather...</p>
            <p className="text-center">{optionOne}</p>
            <p className="text-center">or...</p>
            <Link
              className={
                answered ? "btn btn-primary w-100" : "btn btn-success w-100"
              }
              to={answered ? `/questions/${id}/results` : `/questions/${id}`}
            >
              {answered ? "Results" : "Answer Poll"}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PollCard;
