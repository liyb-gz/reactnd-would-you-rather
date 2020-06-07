import {
  SET_USERS,
  ADD_QUESTION_TO_USER_LIST,
  ADD_QUESTION_ANSWER_TO_USER_LIST,
} from "../actions/users";

function users(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION_TO_USER_LIST:
      const { author: userId, id: questionId } = action.question;
      return {
        ...state,
        [userId]: {
          ...state[userId],
          questions: state[userId].questions.concat([questionId]),
        },
      };
    case ADD_QUESTION_ANSWER_TO_USER_LIST:
      const { authedUser, qid, answer } = action.answer;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
}

export default users;
