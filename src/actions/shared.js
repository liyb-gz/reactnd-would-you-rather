import { getInitialData, saveQuestion } from "../utils/api";
import { setQuestions, addQuestion } from "./questions";
import { setUsers, addQuestionToUserList } from "./users";
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

export function handleNewQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion(question)
      .then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUserList(question));
      dispatch(hideLoading());
      })
      .catch((e) => {
        console.error("Error", e);
    });
  };
}
