import { getInitialData } from "../utils/api";
import { setQuestions } from "./questions";
import { setUsers } from "./users";
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
