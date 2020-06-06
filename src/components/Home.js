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
              <a onClick={() => this.setDisplayUnanswered(true)}>
                Unanswered Questions
              </a>
            </li>
            <li className={!displayUnanswered ? "is-active" : null}>
              <a onClick={() => this.setDisplayUnanswered(false)}>
                Answered Questions
              </a>
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
  const questionIds = Object.keys(questions);
  const currentUser = users[authedUser] || null;
  const answeredQuestionIds = currentUser
    ? Object.keys(currentUser.answers)
    : [];
  const unansweredQuestionIds = questionIds.filter(
    (id) => !answeredQuestionIds.includes(id)
  );
  return {
    answeredQuestionIds,
    unansweredQuestionIds,
  };
}

export default connect(mapStateToProps)(Home);
