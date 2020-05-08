import { combineReducers } from "redux";
import authedUser from "./authedUser";
import questions from "./questions";
import users from "./users";

export default combineReducers({ authedUser, users, questions });
