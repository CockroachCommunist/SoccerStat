import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./League.module.css";

import { changeOpenLeagueMatch } from "../../../store/leagueMatchId/action";

interface IProps {
  id: number;
  leagueName: string;
  areaName: string;
}

export const League: React.FC<IProps> = ({ id, leagueName, areaName }) => {
  const dispatch = useDispatch();

  const openMatch = () => {
    return dispatch(changeOpenLeagueMatch(id));
  };

  return (
    <NavLink
      to={`/SoccerStat/${id}/match`}
      onClick={openMatch}
      className={s.section}
      key={id}
    >
      <p className={s.leagueName}>{leagueName}</p>
      <p className={s.areaName}>{areaName}</p>
    </NavLink>
  );
};
