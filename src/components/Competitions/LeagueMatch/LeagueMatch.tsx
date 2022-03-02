import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchMatchRequest } from "../../../store/leagueMatch/action";
import { RootState } from "../../../store/rootReducer";

import {
  getError,
  getMatches,
  getPending,
} from "../../../store/leagueMatch/selectors";

import { Loader } from "../../Loader/Loader";
import s from "./LeagueMatch.module.css";

export const LeagueMatch = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPending);
  const matches = useSelector(getMatches);
  const error = useSelector(getError);
  const id = useSelector((state: RootState) => state.leagueMatchId.openId);

  useEffect(() => {
    dispatch(FetchMatchRequest(id));
  }, []);

  console.log(matches);

  return (
    <>
      <input type="date" />
      <input type="date" />
      <div className={s.container}>
        {pending && (
          <div className={s.loader}>
            <Loader />
          </div>
        )}
        {matches.length &&
          matches.map((match: any) => {
            const dateMatch = new Date(`${match.utcDate}`);
            const date = () => {
              if (dateMatch.getUTCDate().toString().length == 1) {
                return `0${dateMatch.getUTCDate()}`;
              }
              return dateMatch.getUTCDate();
            };
            const mouth = () => {
              if (dateMatch.getUTCMonth().toString().length == 1) {
                return `0${dateMatch.getUTCMonth()}`;
              }
              return dateMatch.getUTCMonth();
            };

            return (
              <div
                className={pending ? s.loaderActive : s.section}
                key={match.id}
              >
                <div className={s.infoDateStatus}>
                  <div className={s.date}>
                    {`Начало: ${date()} : ${mouth()} : ${dateMatch.getUTCFullYear()}`}
                  </div>
                  <div
                    className={
                      match.status === "FINISHED" ? s.statusFinished : s.status
                    }
                  >
                    {match.status === "SCHEDULED" && "Запланирован"}
                    {match.status === "LIVE" && "Прямой эфир"}
                    {match.status === "IN_PLAY" && "В игре"}
                    {match.status === "PAUSED" && "Пауза"}
                    {match.status === "FINISHED" && "Завершен"}
                    {match.status === "POSTPONED" && "Отложен"}
                    {match.status === "SUSPENDED" && "Приостановлен"}
                    {match.status === "CANCELED" && "Отменен"}
                  </div>
                </div>
                <div className={s.homeTeam}>
                  <div className={s.teamsName}>{match.homeTeam.name}</div>
                  <div>
                    {match.status === "FINISHED"
                      ? `${
                          match.score.fullTime.homeTeam
                            ? match.score.fullTime.homeTeam
                            : "0"
                        }`
                      : `${
                          match.score.fullTime.homeTeam
                            ? match.score.fullTime.homeTeam
                            : "-"
                        }`}
                  </div>
                </div>
                <div className={s.awayTeam}>
                  <div className={s.teamsName}>{match.awayTeam.name}</div>
                  <div>
                    {match.status === "FINISHED"
                      ? `${
                          match.score.fullTime.awayTeam
                            ? match.score.fullTime.awayTeam
                            : "0"
                        }`
                      : `${
                          match.score.fullTime.awayTeam
                            ? match.score.fullTime.awayTeam
                            : "-"
                        }`}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
