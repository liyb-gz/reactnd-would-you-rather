import { getInitialData } from "../utils/api";
import { setQuestions } from "./questions";

export function handleInitialData() {
  return (dispatch) => {
    // TODO: Show loading bar
    // TODO: Dispatch to get users
    getInitialData().then(({ users, questions }) => {
      dispatch(setQuestions(questions));
    });
    // TODO: Dispatch to get questions
    // TODO: Dispatch to get authedUser
    // TODO: Hide loading bar
  };
}
