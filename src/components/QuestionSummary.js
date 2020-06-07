import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function QuestionSummary(props) {
  const { question, author } = props;
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
            <div className="content">
              <p>
                <strong>Would you rather: </strong>
                <br />
                {question.optionOne.text} or {question.optionTwo.text}?
              </p>
            </div>
          </div>
        </article>
      </div>
      <footer className="card-footer">
        <Link
          to={`questions/${question.id}`}
          className="card-footer-item button is-white"
        >
          View
        </Link>
      </footer>
    </div>
  );
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const author = users[question.author];
  return {
    question,
    author,
  };
}

export default connect(mapStateToProps)(QuestionSummary);
