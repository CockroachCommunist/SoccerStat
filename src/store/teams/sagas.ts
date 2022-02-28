import { all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchTeamSuccess, FetchTeamError } from "./action";
import { FETCH_TEAM_REQUEST } from "./teamTypes";

const urlAddress = "https://api.football-data.org/v2/teams";

const getTeams = () =>
  axios.get(urlAddress, {
    headers: {
      "X-Auth-Token": `${process.env.REACT_APP_API_KEY}`,
    },
  });

interface ResGenerator {
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* TeamSagaWorker() {
  try {
    const res: ResGenerator = yield call(getTeams);
    yield put(
      FetchTeamSuccess({
        teams: res.data.teams,
      })
    );
  } catch (e: any) {
    FetchTeamError({ error: e?.message });
  }
}

function* TeamSagaWatcher() {
  yield takeLatest(FETCH_TEAM_REQUEST, TeamSagaWorker);
}

export default TeamSagaWatcher;
