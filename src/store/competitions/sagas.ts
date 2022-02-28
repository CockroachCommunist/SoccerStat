import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchCompetitionError, FetchCompetitionSuccess } from "./action";
import { FETCH_COMPETITION_REQUEST } from "./competitionTypes";

const urlAddress =
  "https://api.football-data.org/v2/competitions?plan=TIER_ONE";
const getCompetitions = () =>
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

function* CompetitionSagaWorker() {
  try {
    const res: ResGenerator = yield call(getCompetitions);
    yield put(
      FetchCompetitionSuccess({
        competitions: res.data.competitions,
      })
    );
  } catch (e: any) {
    FetchCompetitionError({
      error: e.message,
    });
  }
}

function* CompetitionSagaWatcher() {
  yield takeLatest(FETCH_COMPETITION_REQUEST, CompetitionSagaWorker);
}

export default CompetitionSagaWatcher;
