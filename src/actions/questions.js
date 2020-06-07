export const SET_QUESTIONS = "SET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions,
});

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const addQuestionAnswer = (answer) => ({
  type: ADD_QUESTION_ANSWER,
  answer,
});
