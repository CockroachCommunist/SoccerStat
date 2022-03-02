import { CHANGE_OPEN_LEAGUE_MATCH } from "./types";

export const changeOpenLeagueMatch = (id: number | null) => {
  return {
    type: CHANGE_OPEN_LEAGUE_MATCH,
    payload: id,
  };
};
