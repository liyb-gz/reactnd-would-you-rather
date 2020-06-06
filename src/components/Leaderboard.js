import React from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

function Leaderboard(props) {
  const { users } = props;
  return users.map((user) => <UserCard user={user} />);
}

function mapStateToProps({ users }) {
  const sortedUsers = Object.values(users).sort((a, b) => {
    const scoreA = Object.keys(a.answers).length + a.questions.length;
    const scoreB = Object.keys(b.answers).length + b.questions.length;
    return scoreB - scoreA;
  });
  return {
    users: sortedUsers,
  };
}

export default connect(mapStateToProps)(Leaderboard);
