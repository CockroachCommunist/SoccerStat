import { call, put, takeLatest } from "redux-saga/effects";
import { IAction } from "../index";
import axios from "axios";

import { FetchTeamMatchSuccess, FetchTeamMatchError } from "./action";
import { FETCH_TEAM_MATCH_REQUEST } from "./teamTypes";

const urlAddress = "https://api.football-data.org/v2/teams/";

const getTeamMatch = (id: number) =>
  axios.get(`${urlAddress}${id}/matches`, {
    headers: { "X-Auth-Token": `${process.env.REACT_APP_API_KEY}` },
  });

interface ResGenerator {
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* TeamMatchSagaWorker(action: IAction<number>) {
  try {
    if (action?.payload) {
      const res: ResGenerator = yield call(getTeamMatch, action.payload);
      
      yield put(
        FetchTeamMatchSuccess({
          teamMatch: res.data.matches,
        })
      );
    }
  } catch (e: any) {
    FetchTeamMatchError({ error: e.message });
  }
}

function* TeamMatchSagaWatcher() {
  yield takeLatest(FETCH_TEAM_MATCH_REQUEST, TeamMatchSagaWorker);
}

export default TeamMatchSagaWatcher;
