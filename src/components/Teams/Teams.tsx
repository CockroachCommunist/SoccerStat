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

export const Teams = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const teams = useSelector(getTeamsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(FetchTeamRequest());
  }, []);

  useEffect(() => {
    console.log(teams);
  }, [teams]);

  return (
    <>
      {pending && (
        <div className={s.loader}>
          <Loader />
        </div>
      )}
      {error && <div>Error</div>}
      {teams.length &&
        teams.map((team: any) => {
          return (
            <div className={pending ? s.loaderActive : s.section} key={team.id}>
              <div className={s.teamName}>{team.name}</div>
              <img className={s.teamLogo} src={team.crestUrl} alt="" />
            </div>
          );
        })}
    </>
  );
};
