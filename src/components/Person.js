import React from "react";

function Person() {
  return (
    <div className="card card-person">
      <div className="card-content">
        <div className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img
                className="is-rounded"
                src="https://i.pravatar.cc/300?img=2"
                alt="User portrait"
              />
            </p>
          </figure>
          <div className="media-content">
            <h3 className="title">
              <strong>Felix Li</strong>
            </h3>
          </div>
        </div>
        <table className="table">
          <tr>
            <td>Answered Questions</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Created Questions</td>
            <td>5</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Person;
