import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function addQuestion(question) {
  return _saveQuestion(question);
}

export function saveAnswer(answer, questionID, authedUser) {
  return _saveQuestionAnswer({ authedUser, questionID, answer });
}
