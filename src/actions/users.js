export const SET_USERS = "SET_USERS";
export const ADD_QUESTION_TO_USER_LIST = "ADD_QUESTION_TO_USER_LIST";

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const addQuestionToUserList = (question) => ({
  type: ADD_QUESTION_TO_USER_LIST,
  question,
});
