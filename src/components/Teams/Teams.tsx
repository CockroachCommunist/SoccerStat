import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from "./Teams.module.css";

import {
  getErrorSelector,
  getPendingSelector,
  getTeamsSelector,
} from "../../store/teams/selectors";
import { FetchTeamRequest } from "../../store/teams/action";
import { Loader } from "../Loader/Loader";
import { NavLink } from "react-router-dom";
import { changeOpenTeamMatch } from "../../store/teamMatchId/action";

export const Teams = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const teams = useSelector(getTeamsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(FetchTeamRequest());
  }, []);

  return (
    <div className={s.container}>
      {pending && (
        <div className={s.loader}>
          <Loader />
        </div>
      )}
      {error && <div>Error</div>}
      {!!teams.length &&
        teams.map((team: any) => {
          const openMatch = () => {
            return dispatch(changeOpenTeamMatch(team.id));
          };
          return (
            <NavLink
              to={`/teams/${team.id}/match`}
              onClick={openMatch}
              className={pending ? s.loaderActive : s.section}
              key={team.id}
            >
              <div className={s.teamName}>{team.name}</div>
              <img className={s.teamLogo} src={team.crestUrl} alt="" />
            </NavLink>
          );
        })}
    </div>
  );
};
