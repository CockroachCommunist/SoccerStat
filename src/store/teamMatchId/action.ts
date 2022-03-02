import { CHANGE_OPEN_TEAM_MATCH } from "./types";

export const changeOpenTeamMatch = (id: number | null) => {
  return {
    type: CHANGE_OPEN_TEAM_MATCH,
    payload: id,
  };
};
