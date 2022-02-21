import {
  FETCH_MATCH_REQUEST,
  FETCH_MATCH_SUCCESS,
  FETCH_MATCH_ERROR,
} from "./matchTypes";

export const FetchMatchRequest = (id: number) => ({
  type: FETCH_MATCH_REQUEST,
  payload: id,
});

export const FetchMatchSuccess = (payload: any) => ({
  type: FETCH_MATCH_SUCCESS,
  payload,
});

export const FetchMatchError = (payload: any) => ({
  type: FETCH_MATCH_ERROR,
});
