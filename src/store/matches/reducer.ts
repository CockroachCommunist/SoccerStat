import {
  FETCH_MATCH_REQUEST,
  FETCH_MATCH_SUCCESS,
  FETCH_MATCH_ERROR,
} from "./matchTypes";

interface IState {
  pending: boolean;
  matches: object;
  error: null | string;
}

const initialState: IState = {
  pending: false,
  matches: [],
  error: null,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case FETCH_MATCH_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MATCH_SUCCESS:
      return {
        ...state,
        pending: false,
        matches: payload.matches,
        error: null,
      };
    case FETCH_MATCH_ERROR:
      return {
        ...state,
        pending: false,
        matches: [],
        error: payload.error,
      };
    default:
      return state;
  }
};
