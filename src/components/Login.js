import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { withRouter } from "react-router-dom";

export class Login extends Component {
  state = {
    selectedUser: "",
  };
  updateSelectedUser = (event) => {
    event.preventDefault();
    this.setState({
      selectedUser: event.target.value,
    });
  };
  loginUser = () => {
    const { selectedUser } = this.state;
    const { setAuthedUser, history } = this.props;

    setAuthedUser(selectedUser);
    history.push("/");
  };
  render() {
    const { users } = this.props;
    const { selectedUser } = this.state;
    return (
      <div className="card card-login">
        <div className="card-content has-text-centered has-background-primary hero">
          <h3 className="title">Welcome to Would You Rather</h3>
          <h4 className="subtitle">Please login to continue</h4>
        </div>
        <div className="card-content has-text-centered">
          <div className="select is-fullwidth is-primary">
            <select
              value={selectedUser}
              placeholder="Select a user"
              onChange={this.updateSelectedUser}
            >
              <option hidden disabled value="">
                Select a user
              </option>
              {Object.values(users).map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <button
            className="button is-primary is-fullwidth"
            onClick={this.loginUser}
            disabled={selectedUser === ""}
          >
            Log in
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

function mapDispatchToProps(dispatch) {
  return {
    setAuthedUser: (id) => {
      dispatch(setAuthedUser(id));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
