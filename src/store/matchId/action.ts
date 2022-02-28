import { CHANGE_OPEN_MATCH } from "./types";

export const changeOpenMatch = (id: number | null) => {
  return {
    type: CHANGE_OPEN_MATCH,
    payload: id,
  };
};
