import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import { setQuestions, addQuestion, addQuestionAnswer } from "./questions";
import {
  setUsers,
  addQuestionToUserList,
  addQuestionAnswerToUserList,
} from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "./loading";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(setQuestions(questions));
        dispatch(setUsers(users));
        dispatch(setAuthedUser(null));
        dispatch(hideLoading());
      })
      .catch((e) => {
        console.error("Error", e);
      });
  };
}

export function handleNewQuestion(question, callback) {
  return (dispatch) => {
    return saveQuestion(question)
      .then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUserList(question));
        if (callback) {
          callback(question);
        }
      })
      .catch((e) => {
        console.error("Error", e);
    });
  };
}

export function handleQuestionAnswer(answer, callback) {
  return (dispatch) => {
    return saveQuestionAnswer(answer)
      .then(() => {
        dispatch(addQuestionAnswer(answer));
        dispatch(addQuestionAnswerToUserList(answer));
        if (callback) {
          callback(answer);
        }
      })
      .catch((e) => {
        console.error("Error", e);
      });
  };
}
