import { RootState } from "../rootReducer";

export const getPending = (state: RootState) => state.competition?.pending;

export const getCompetitions = (state: RootState) =>
  state.competition?.competitions;

export const getError = (state: RootState) => state.competition?.error;
