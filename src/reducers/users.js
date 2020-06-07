import { SET_USERS, ADD_QUESTION_TO_USER_LIST } from "../actions/users";

function users(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION_TO_USER_LIST: {
      const { author: userId, id: questionId } = action.question;
      console.log("USER REDUCER:", state, userId, questionId);
      return {
        ...state,
        [userId]: {
          ...state[userId],
          questions: state[userId].questions.concat([questionId]),
        },
      };
    }
    default:
      return state;
  }
}

export default users;
