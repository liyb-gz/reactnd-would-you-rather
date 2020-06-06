import React, { Component } from "react";

export class NewQuestion extends Component {
  render() {
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
                  <input className="input" type="text" placeholder="Option 1" />
                </div>
              </div>
              <p>or</p>
              <div className="field">
                <div className="control">
                  <input className="input" type="text" placeholder="Option 2" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            Submit
          </a>
        </footer>
      </div>
    );
  }
}

export default NewQuestion;
