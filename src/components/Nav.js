import React, { Component } from "react";

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
            <a className="navbar-item">Home</a>

            <a className="navbar-item">New Question</a>
            <a className="navbar-item">Leaderboard</a>
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

export default Nav;
