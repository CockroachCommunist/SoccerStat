import { all, fork } from "redux-saga/effects";

import competition from "./competitions/sagas";
import match from "./leagueMatch/sagas";
import team from "./teams/sagas";
import teamMatch from "./teamMatch/sagas";

export function* rootSaga() {
  yield all([fork(competition), fork(match), fork(team), fork(teamMatch)]);
}
