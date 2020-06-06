import { getInitialData } from "../utils/api";
import { setQuestions } from "./questions";
import { setUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "./loading";

// TODO: Remove this test authed user id
const AUTHED_USER_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(setQuestions(questions));
        dispatch(setUsers(users));
        dispatch(setAuthedUser(AUTHED_USER_ID));
        dispatch(hideLoading());
      })
      .catch((e) => {
        console.error("Error", e);
      });
  };
}
