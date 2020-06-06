import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export class Nav extends Component {
  state = {
    isActive: false,
  };
  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  render() {
    console.log(this.props.authedUser);
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
          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : null}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={this.toggleActive}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
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
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Log in</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { authedUser } = state;
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Nav);
