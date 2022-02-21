import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { Action } from "redux";

import { FetchMatchSuccess, FetchMatchError } from "./action";
import { FETCH_MATCH_REQUEST } from "./matchTypes";

const urlAddress = "http://api.football-data.org/v2/competitions/";

const getMatches = (id: number) => {
  axios.get(`${urlAddress}${id}/matches`, {
    headers: { "X-Auth-Token": `${process.env.REACT_APP_API_KEY}` },
  });
};

export interface ResGenerator {
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* MatchSagaWorker(action: Action<number>) {
  try {
    //@ts-ignore
    const res = yield call(getMatches, action.payload);
    yield put(FetchMatchSuccess({ matches: res.data.matches }));
  } catch (e: any) {
    FetchMatchError({ error: e.message });
  }
}

function* MatchSagaWatcher() {
  yield all([takeLatest(FETCH_MATCH_REQUEST, MatchSagaWorker)]);
}

export default MatchSagaWatcher;
