import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import QuestionSummary from "./QuestionSummary";

export class Home extends Component {
  render() {
    const { questionIds } = this.props;
    return (
      <Fragment>
        <div className="tabs">
          <ul>
            <li className="is-active">
              <a>Unanswered Questions</a>
            </li>
            <li>
              <a>Answered Questions</a>
            </li>
          </ul>
        </div>
        {questionIds.map((id) => (
          <QuestionSummary id={id} key={id} />
        ))}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionIds: Object.keys(state.questions),
  };
}

export default connect(mapStateToProps)(Home);
