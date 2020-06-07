import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Question from "./Question";
import Loading from "./Loading";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    return loading ? (
      <Loading />
    ) : (
      <div className="App">
        <Nav />
        <section className="section wyr-main">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-two-thirds-tablet is-half-desktop">
                <ProtectedRoute path="/" exact component={Home} />
                <ProtectedRoute path="/add" component={NewQuestion} />
                <ProtectedRoute path="/leaderboard" component={Leaderboard} />
                <ProtectedRoute path="/questions/:id" component={Question} />
                <Route path="/login" component={Login} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps({ loading }) {
  return {
    loading,
  };
}

export default connect(mapStateToProps)(App);
