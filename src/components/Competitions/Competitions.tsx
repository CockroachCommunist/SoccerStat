import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Competitions.module.css";

import { Loader } from "../Loader/Loader";
import { Error } from "../Error/Error";
import { League } from "./League/League";

import { FetchCompetitionRequest } from "../../store/competitions/action";
import {
  getPending,
  getCompetitions,
  getError,
} from "../../store/competitions/selectors";

export const Competition = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPending);
  const competitions = useSelector(getCompetitions);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(FetchCompetitionRequest());
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
      {!!competitions.length &&
        competitions.map((competition: any) => {
          return (
            <section
              className={pending ? s.loaderActive : s.section}
              key={competition.id}
            >
              <League
                id={competition.id}
                leagueName={competition.name}
                areaName={competition.area.name}
              />
            </section>
          );
        })}
    </section>
  );
};
