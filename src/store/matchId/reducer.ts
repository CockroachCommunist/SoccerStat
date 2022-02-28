import { CHANGE_OPEN_MATCH } from "./types";

interface IState {
  openId: number | null;
}

const initialState: IState = {
  openId: null,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case CHANGE_OPEN_MATCH:
      return {
        ...state,
        openId: payload,
      };
    default:
      return state;
  }
};
