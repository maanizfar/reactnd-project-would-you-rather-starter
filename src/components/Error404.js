import React from "react";
import { Link } from "react-router-dom";

class Error404 extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Error 404</h1>
        <Link to="/">Back to home</Link>
      </div>
    );
  }
}

export default Error404;
