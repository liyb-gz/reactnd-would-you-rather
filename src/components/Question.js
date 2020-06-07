import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
import NotFound from "./NotFound";

export class Question extends Component {
  render() {
    const { author, question, currentUser } = this.props;

    if (!(author && question && currentUser)) {
      return <NotFound />;
    }

    const alreadyAnswered = Object.keys(currentUser.answers).includes(
      question.id
    );

    let QuestionCard = alreadyAnswered ? AnsweredQuestion : UnansweredQuestion;

    return (
      <QuestionCard
        author={author}
        question={question}
        currentUser={currentUser}
      />
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { match }) {
  const questionId = match.params.id;
  const question = questions[questionId] || null;
  const author = question ? users[question.author] : null;
  const currentUser = users[authedUser] || null;

  return {
    question,
    author,
    currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
