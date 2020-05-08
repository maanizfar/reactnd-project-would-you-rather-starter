import {
  RECIEVE_QUESTIONS,
  ADD_QUESTION,
  SAVE_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return action.questions;

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case SAVE_ANSWER:
      const { qid, answer, authedUser } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser),
          },
        },
      };

    default:
      return state;
  }
}
