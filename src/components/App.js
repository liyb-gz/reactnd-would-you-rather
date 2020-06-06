import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Question from "./Question";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    return loading ? (
      <div className="pageloader is-active">
        <span className="title">Would You Rather is loading...</span>
      </div>
    ) : (
      <div className="App">
        <Nav />
        <section className="section wyr-main">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-two-thirds-tablet is-half-desktop">
                <Route path="/" exact component={Home} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/questions/:id" component={Question} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
  };
}

export default connect(mapStateToProps)(App);
