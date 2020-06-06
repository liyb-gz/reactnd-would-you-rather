import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    console.log(this.props.questions);
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
        <div className="card card-question">
          <header className="card-header has-background-primary">
            <p className="card-header-title">Felix Li asks:</p>
          </header>
          <div className="card-content">
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img
                    className="is-rounded"
                    src="https://i.pravatar.cc/300?img=1"
                    alt="User portrait"
                  />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Would you rather: </strong>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>
            </article>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              View
            </a>
          </footer>
        </div>
        <div className="card card-question">
          <header className="card-header has-background-primary">
            <p className="card-header-title">Felix Li asks:</p>
          </header>
          <div className="card-content">
            <article className="media">
              <figure className="media-left">
                <p className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="https://i.pravatar.cc/300?img=1"
                    alt="User portrait"
                  />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Would you rather: </strong>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>
            </article>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              View
            </a>
          </footer>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
  };
}

export default connect(mapStateToProps)(Home);
