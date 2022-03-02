import {
  FETCH_TEAM_MATCH_REQUEST,
  FETCH_TEAM_MATCH_SUCCESS,
  FETCH_TEAM_MATCH_ERROR,
} from "./teamTypes";

export const FetchTeamMatchRequest = (payload: number) => ({
  type: FETCH_TEAM_MATCH_REQUEST,
  payload,
});

export const FetchTeamMatchSuccess = (payload: any) => ({
  type: FETCH_TEAM_MATCH_SUCCESS,
  payload,
});

export const FetchTeamMatchError = (payload: any) => ({
  type: FETCH_TEAM_MATCH_ERROR,
});
