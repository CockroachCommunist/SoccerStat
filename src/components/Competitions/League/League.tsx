import React from "react";
import { useDispatch } from "react-redux";
import { changeOpenMatch } from "../../../store/matchId/action";
import s from "./League.module.css";
import { NavLink } from "react-router-dom";

interface IProps {
  id: number;
  leagueName: string;
  areaName: string;
}

export const League: React.FC<IProps> = ({ id, leagueName, areaName }) => {
  const dispatch = useDispatch();

  const openMatch = () => {
    return dispatch(changeOpenMatch(id));
  };

  return (
    <NavLink
      to={`/SoccerStat/${id}/match`}
      onClick={openMatch}
      className={s.section}
      key={id}
    >
      <div className={s.leagueName}>{leagueName}</div>
      <div className={s.areaName}>{areaName}</div>
    </NavLink>
  );
};
