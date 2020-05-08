export const RECIEVE_USERS = "RECIEVE_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const SAVE_ANSWER_TO_USER = "SAVE_ANSWER_TO_USER";

export function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION_TO_USER,
    question,
  };
}

export function saveAnswer({ answer, authedUser, qid }) {
  return {
    type: SAVE_ANSWER_TO_USER,
    answer,
    authedUser,
    qid,
  };
}
