import {
  RECIEVE_USERS,
  ADD_QUESTION_TO_USER,
  SAVE_ANSWER_TO_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case SAVE_ANSWER_TO_USER:
      const { authedUser, qid, answer } = action;
      // console.log("SAVE_ANSWERTOUSER: ", qid);
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };

    case ADD_QUESTION_TO_USER:
      const { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };

    default:
      return state;
  }
}
