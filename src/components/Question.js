import React, { Component } from "react";

export class Question extends Component {
  render() {
    return (
      <div className="card card-question">
        <header className="card-header has-background-primary">
          <p className="card-header-title">Asked by Felix Li</p>
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
              <p className="content">
                <strong>Results:</strong>
              </p>
              <div className="columns">
                <div className="column">
                  <div className="card card-question-result is-fullwidth is-shadowless">
                    <div className="card-content">
                      <p className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                      <figure>
                        <progress
                          className="progress is-primary is-marginless"
                          value="15"
                          max="100"
                        >
                          15%
                        </progress>
                        <figcaption>
                          <strong>2 out of 3 votes</strong>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div
                    className="card card-question-result selected has-badge-rounded has-badge-large is-fullwidth is-shadowless"
                    data-badge="✓"
                  >
                    <div className="card-content">
                      <p className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                      <figure>
                        <progress
                          className="progress is-primary is-marginless"
                          value="15"
                          max="100"
                        >
                          15%
                        </progress>
                        <figcaption>
                          <strong>2 out of 3 votes</strong>
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
}

export default Question;
