import React from "react";

function UserCard(props) {
  const { user } = props;
  const numQuestions = user.questions.length;
  const numAnswers = Object.keys(user.answers).length;
  return (
    <div className="card card-person">
      <div className="card-content">
        <div className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img
                className="is-rounded"
                src={user.avatarURL}
                alt={user.name}
              />
            </p>
          </figure>
          <div className="media-content">
            <h3 className="title">
              <strong>{user.name}</strong>
            </h3>
          </div>
        </div>
        <table className="table">
          <tbody>
            <tr>
              <td>Answered Questions</td>
              <td>{numAnswers}</td>
            </tr>
            <tr>
              <td>Created Questions</td>
              <td>{numQuestions}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserCard;
