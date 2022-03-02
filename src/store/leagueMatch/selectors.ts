import { RootState } from "../rootReducer";

export const getPending = (state: RootState) => state.leagueMatch.pending;

export const getMatches = (state: RootState) => state.leagueMatch.matches;

export const getError = (state: RootState) => state.leagueMatch.error;
