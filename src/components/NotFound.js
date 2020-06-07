import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="title">Page Not Found.</h3>
        <p className="content">
          If you entered a web address, check it is correct.
        </p>
        <Link to="/" className="button is-primary">
          Take me home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
