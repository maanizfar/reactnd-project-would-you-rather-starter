export const SET_AUTHEDUSER = "SET_AUTHEDUSER";

export function setAuthedUser(authedUserId) {
  return {
    type: SET_AUTHEDUSER,
    id: authedUserId,
  };
}
