import React, { Component } from "react";

export class NewQuestion extends Component {
  state = {
    option1: "",
    option2: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { option1, option2 } = this.state;
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
                  <input
                    className="input"
                    value={option1}
                    onChange={this.handleChange}
                    name="option1"
                    type="text"
                    placeholder="Option 1"
                  />
                </div>
              </div>
              <p>or</p>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    value={option2}
                    onChange={this.handleChange}
                    name="option2"
                    type="text"
                    placeholder="Option 2"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer className="card-footer">
          <button
            className="card-footer-item button is-white"
            disabled={!(option1 || option2)}
          >
            Submit
          </button>
        </footer>
      </div>
    );
  }
}

export default NewQuestion;
