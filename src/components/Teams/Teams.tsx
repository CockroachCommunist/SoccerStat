import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Teams.module.css";

import { Loader } from "../Loader/Loader";
import { Error } from "../Error/Error";

import { FetchTeamRequest } from "../../store/teams/action";
import { changeOpenTeamMatch } from "../../store/teamMatchId/action";
import {
  getErrorSelector,
  getPendingSelector,
  getTeamsSelector,
} from "../../store/teams/selectors";

export const Teams = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const teams = useSelector(getTeamsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(FetchTeamRequest());
  }, []);

  return (
    <section className={s.container}>
      {pending && (
        <article className={s.loader}>
          <Loader />
        </article>
      )}
      {error && (
        <article>
          <Error />
        </article>
      )}
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
              <p className={s.teamName}>{team.name}</p>
              <img className={s.teamLogo} src={team.crestUrl} alt="" />
            </NavLink>
          );
        })}
    </section>
  );
};
