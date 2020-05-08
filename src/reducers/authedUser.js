import { SET_AUTHEDUSER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHEDUSER:
      return action.id;

    default:
      return state;
  }
}
