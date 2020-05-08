import {
  addQuestion as addQuestionToDatabase,
  saveAnswer as saveAnswerToDatabase,
} from "../utils/api";

import {
  addQuestion as addQuestionToUser,
  saveAnswer as saveAnswerToUser,
} from "./users";

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions,
  };
}

function saveAnswer({ answer, qid, authedUser }) {
  return {
    type: SAVE_ANSWER,
    answer,
    qid,
    authedUser,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(author, optionOneText, optionTwoText) {
  return (dispatch) => {
    return addQuestionToDatabase({ author, optionOneText, optionTwoText })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      })
      .catch((err) => {
        console.warn(err);
        alert("Something wrong happened. Try again. ");
      });
  };
}

export function handleSaveAnswer(answer, questionID, authedUser) {
  return (dispatch) => {
    dispatch(saveAnswer({ answer, qid: questionID, authedUser }));
    dispatch(saveAnswerToUser({ answer, qid: questionID, authedUser }));
    return saveAnswerToDatabase(answer, questionID, authedUser).catch((err) => {
      console.warn(err);
      alert("Something wrong happene. Try again. ");
    });
  };
}
