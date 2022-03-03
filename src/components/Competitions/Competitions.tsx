import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Competitions.module.css";
import { League } from "./League/League";
import { Loader } from "../Loader/Loader";

import {
  getPending,
  getCompetitions,
  getError,
} from "../../store/competitions/selectors";
import { FetchCompetitionRequest } from "../../store/competitions/action";

export const Competition = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPending);
  const competitions = useSelector(getCompetitions);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(FetchCompetitionRequest());
  }, []);

  return (
    <div className={s.container}>
      {pending && (
        <div className={s.loader}>
          <Loader />
        </div>
      )}
      {error && <div>Error</div>}
      {competitions.length &&
        competitions.map((competition: any) => {
          return (
            <div
              className={pending ? s.loaderActive : s.section}
              key={competition.id}
            >
              <League
                id={competition.id}
                leagueName={competition.name}
                areaName={competition.area.name}
              />
            </div>
          );
        })}
    </div>
  );
};
