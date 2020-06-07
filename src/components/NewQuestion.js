import React, { Component } from "react";
import { connect } from "react-redux";
import { handleNewQuestion } from "../actions/shared";
import { withRouter } from "react-router-dom";

export class NewQuestion extends Component {
  state = {
    option1: "",
    option2: "",
    loading: false,
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addNewQuestion, authedUser, history } = this.props;
    const { option1, option2 } = this.state;

    this.setLoading(true);
    addNewQuestion(
      {
        optionOneText: option1,
        optionTwoText: option2,
        author: authedUser,
      },
      ({ id }) => {
        this.setLoading(false);
        history.push(`/questions/${id}`);
      }
    );
  };

  setLoading = (value) => {
    this.setState({
      loading: value,
    });
  };

  render() {
    const { option1, option2, loading } = this.state;
    return (
      <div className="card card-question">
        <header className="card-header has-background-primary">
          <p className="card-header-title">Create New Question</p>
        </header>
        <div className="card-content">
          <div className="content">
            <form>
              <h3>Would you rather:</h3>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    value={option1}
                    onChange={this.handleChange}
                    name="option1"
                    type="text"
                    placeholder="Option 1"
                  />
                </div>
              </div>
              <p>or</p>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    value={option2}
                    onChange={this.handleChange}
                    name="option2"
                    type="text"
                    placeholder="Option 2"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer className="card-footer">
          <button
            className={`card-footer-item button is-white ${
              loading ? "is-loading" : ""
            }`}
            disabled={!(option1 && option2)}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </footer>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewQuestion: (question, callback) => {
      dispatch(handleNewQuestion(question, callback));
    },
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewQuestion)
);
