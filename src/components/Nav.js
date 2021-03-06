import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

export class Nav extends Component {
  state = {
    isActive: false,
  };

  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.setActive(false);
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }

  setActive = (value) => {
    this.setState(({ isActive }) => ({
      isActive: typeof value === "boolean" ? value : !isActive,
    }));
  };

  render() {
    const { currentUser, logoutUser } = this.props;
    const { isActive } = this.state;
    return (
      <nav
        className="wyr-navbar navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <strong>Would You Rather?</strong>
          </div>
          <button
            className={`navbar-burger burger button is-primary ${
              isActive ? "is-active" : null
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => this.setActive()}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className={`navbar-menu ${isActive ? "is-active" : null}`}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              exact
            >
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/add"
            >
              New Question
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/leaderboard"
            >
              Leaderboard
            </NavLink>
          </div>

          <div className="navbar-end">
            {currentUser && (
              <Fragment>
                <div className="navbar-item">
                  <p>Welcome, {currentUser.name}</p>
                </div>
                <div className="navbar-item">
                  <figure className="image is-32x32">
                    <img
                      src={currentUser.avatarURL}
                      className="is-rounded"
                      alt={currentUser.name}
                    />
                  </figure>
                </div>
                <div className="navbar-item">
                  <div className="buttons">
                    <button className="button is-white" onClick={logoutUser}>
                      <strong>Log out</strong>
                    </button>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { authedUser, users } = state;
  return {
    currentUser: authedUser ? users[authedUser] : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => {
      dispatch(setAuthedUser(null));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
