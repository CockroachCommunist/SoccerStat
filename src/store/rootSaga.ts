import { all, fork } from "redux-saga/effects";

import competition from "./competitions/sagas";
import match from "./matches/sagas";
import team from "./teams/sagas";

export function* rootSaga() {
  yield all([fork(competition), fork(match), fork(team)]);
}
