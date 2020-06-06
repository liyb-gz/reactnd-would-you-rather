import React from "react";

function AnsweredQuestion(props) {
  const { author, question, currentUser } = props;
  if (!(author || question || currentUser)) {
    return null;
  }

  const vote1 = question.optionOne.votes.length;
  const vote2 = question.optionTwo.votes.length;
  const totalVotes = vote1 + vote2;
  const chosenAnswer = currentUser.answers[question.id];

  console.log(author, question);
  return (
    <div className="card card-question">
      <header className="card-header has-background-primary">
        <p className="card-header-title">{author.name} asked</p>
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
              <strong>Results:</strong>
            </p>
            <div className="columns">
              <div className="column">
                <div
                  className={`card card-question-result is-fullwidth is-shadowless ${
                    chosenAnswer === "optionOne"
                      ? "selected has-badge-rounded has-badge-large"
                      : ""
                  }`}
                  data-badge={chosenAnswer === "optionOne" ? "✓" : null}
                >
                  <div className="card-content">
                    <p className="content">{question.optionOne.text}</p>
                    <figure>
                      <progress
                        className="progress is-primary is-marginless"
                        value={vote1}
                        max={totalVotes}
                      >
                        {totalVotes === 0 ? 0 : (vote1 / totalVotes) * 100}%
                      </progress>
                      <figcaption>
                        <strong>
                          {vote1} out of {totalVotes} vote
                          {totalVotes > 1 ? "s" : null}
                        </strong>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  className={`card card-question-result is-fullwidth is-shadowless ${
                    chosenAnswer === "optionTwo"
                      ? "selected has-badge-rounded has-badge-large"
                      : ""
                  }`}
                  data-badge={chosenAnswer === "optionTwo" ? "✓" : null}
                >
                  <div className="card-content">
                    <p className="content">{question.optionTwo.text}</p>
                    <figure>
                      <progress
                        className="progress is-primary is-marginless"
                        value={vote2}
                        max={totalVotes}
                      >
                        {totalVotes === 0 ? 0 : (vote2 / totalVotes) * 100}%
                      </progress>
                      <figcaption>
                        <strong>
                          {vote2} out of {totalVotes} vote
                          {totalVotes > 1 ? "s" : null}
                        </strong>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default AnsweredQuestion;
