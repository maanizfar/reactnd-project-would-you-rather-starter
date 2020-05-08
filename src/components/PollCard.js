import React from "react";

class PollCard extends React.Component {
  render() {
    const { author, optionOne, answered } = this.props;
    return (
      <div className="card m-3">
        <div className="card-header">{author} asks:</div>
        <div className="card-body">
          <p>Would you rather</p>
          <p className="text-center">{optionOne}</p>
          <p className="text-center">or...</p>
        </div>
        <button className={answered ? "btn btn-primary" : "btn btn-success"}>
          {answered ? "Results" : "Answer Poll"}
        </button>
      </div>
    );
  }
}

export default PollCard;
