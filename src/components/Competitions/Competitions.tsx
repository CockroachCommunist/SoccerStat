import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Competitions.module.css";

import {
  getPendingSelector,
  getCompetitionsSelector,
  getErrorSelector,
} from "../../store/competitions/selectors";
import { FetchCompetitionRequest } from "../../store/competitions/action";

export const Competition = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const competitions = useSelector(getCompetitionsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(FetchCompetitionRequest());
  }, []);

  useEffect(() => {
    console.log(competitions);
  }, [competitions]);

  return (
    <div className={s.container}>
      {pending && <div>Load</div>}
      {error && <div>Error</div>}
      {competitions.length > 0 &&
        competitions.map((competition: any) => {
          return (
            <div className={s.section} key={competition.id}>
              <div className={s.competitionName}>{competition.name}</div>
              <div className={s.areaName}>{competition.area.name}</div>
            </div>
          );
        })}
    </div>
  );
};
