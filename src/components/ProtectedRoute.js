import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute({ component: Component, authedUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authedUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(ProtectedRoute);
