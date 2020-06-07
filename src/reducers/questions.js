import {
  SET_QUESTIONS,
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
} from "../actions/questions";

function questions(state = {}, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_QUESTION_ANSWER:
      const { qid, answer, authedUser } = action.answer;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    default:
      return state;
  }
}

export default questions;
