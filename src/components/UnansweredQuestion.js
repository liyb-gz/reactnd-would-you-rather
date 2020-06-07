import React, { Component } from "react";
import { connect } from "react-redux";
import { handleQuestionAnswer } from "../actions/shared";

class AnsweredQuestion extends Component {
  state = {
    chosenAnswer: null,
  };
  setChosenAnswer = (value) => {
    this.setState({
      chosenAnswer: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { question, currentUser, addQuestionAnswer } = this.props;
    const { chosenAnswer } = this.state;

    addQuestionAnswer({
      authedUser: currentUser.id,
      qid: question.id,
      answer: chosenAnswer,
    });
  };
  render() {
    const { author, question } = this.props;
    const { chosenAnswer } = this.state;

    return (
      <div className="card card-question">
        <header className="card-header has-background-primary">
          <p className="card-header-title">{author.name} asks</p>
        </header>
        <div className="card-content">
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img
                  className="is-rounded"
                  src={author.avatarURL}
                  alt={author.name}
                />
              </p>
            </figure>
            <div className="media-content">
              <p className="content">
                <strong>Would you rather:</strong>
              </p>
              <div className="columns">
                <div className="column">
                  <div
                    className={`card card-question-result is-fullwidth is-shadowless ${
                      chosenAnswer === "optionOne" ? "selected" : ""
                    }`}
                    onClick={() => this.setChosenAnswer("optionOne")}
                  >
                    <div className="card-content">
                      <p className="content">{question.optionOne.text}</p>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div
                    className={`card card-question-result is-fullwidth is-shadowless ${
                      chosenAnswer === "optionTwo" ? "selected" : ""
                    }`}
                    onClick={() => this.setChosenAnswer("optionTwo")}
                  >
                    <div className="card-content">
                      <p className="content">{question.optionTwo.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <footer className="card-footer">
          <button
            className="card-footer-item button is-white"
            disabled={!chosenAnswer}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </footer>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestionAnswer: (answer) => {
      dispatch(handleQuestionAnswer(answer));
    },
  };
}

export default connect(null, mapDispatchToProps)(AnsweredQuestion);
