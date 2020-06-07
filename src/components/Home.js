import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import QuestionSummary from "./QuestionSummary";

export class Home extends Component {
  state = {
    displayUnanswered: true,
  };
  setDisplayUnanswered = (value) => {
    this.setState({
      displayUnanswered: value,
    });
  };
  render() {
    const { answeredQuestionIds, unansweredQuestionIds } = this.props;
    const { displayUnanswered } = this.state;
    const chosenQuestionIds = displayUnanswered
      ? unansweredQuestionIds
      : answeredQuestionIds;
    return (
      <Fragment>
        <div className="tabs">
          <ul>
            <li className={displayUnanswered ? "is-active" : null}>
              <button
                className={`button ${
                  displayUnanswered ? "is-primary" : "is-light"
                }`}
                onClick={() => this.setDisplayUnanswered(true)}
              >
                Unanswered Questions
              </button>
            </li>
            <li className={!displayUnanswered ? "is-active" : null}>
              <button
                className={`button ${
                  !displayUnanswered ? "is-primary" : "is-light"
                }`}
                onClick={() => this.setDisplayUnanswered(false)}
              >
                Answered Questions
              </button>
            </li>
          </ul>
        </div>
        {chosenQuestionIds.map((id) => (
          <QuestionSummary id={id} key={id} />
        ))}
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const sorting = (a, b) => questions[b].timestamp - questions[a].timestamp;
  const currentUser = users[authedUser];
  const answeredQuestionIds = Object.keys(currentUser.answers).sort(sorting);
  const unansweredQuestionIds = Object.keys(questions)
    .filter((id) => !answeredQuestionIds.includes(id))
    .sort(sorting);
  return {
    answeredQuestionIds,
    unansweredQuestionIds,
  };
}

export default connect(mapStateToProps)(Home);
