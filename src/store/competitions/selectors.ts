import { RootState } from "../rootReducer";
import { createSelector } from "reselect";

const getPending = (state: RootState) => state.competition?.pending;

const getCompetitions = (state: RootState) => state.competition?.competitions;

const getError = (state: RootState) => state.competition?.error;

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getCompetitionsSelector = createSelector(
  getCompetitions,
  (competitions) => competitions
);

export const getErrorSelector = createSelector(getError, (error) => error);
