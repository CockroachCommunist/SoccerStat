import { RootState } from "../../../store/rootReducer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchTeamMatchRequest } from "../../../store/teamMatch/action";

import {
  getPending,
  getTeamMatch,
  getError,
} from "../../../store/teamMatch/selectors";

import { Loader } from "../../Loader/Loader";
import s from "./TeamMatch.module.css";

export const TeamMatch = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPending);
  const teamMatch = useSelector(getTeamMatch);
  const error = useSelector(getError);
  const id = useSelector((state: RootState) => state.teamMatchId.openId);

  useEffect(() => {
    dispatch(FetchTeamMatchRequest(id));
  }, []);

  console.log(teamMatch);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // useEffect(()=>{dispatch(FetchTeamMatchFilter(e.target[0].value)), []}
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="date" />
          <input type="date" />
        </label>
        <button type="submit">Click</button>
      </form>

      <div className={s.container}>
        {pending && (
          <div className={s.loader}>
            <Loader />
          </div>
        )}
        {error && <div>Error</div>}
        {teamMatch &&
          teamMatch.map((match: any) => {
            const dateMatch = new Date(match.utcDate);
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
                    {`Начало: ${date()}.${mouth()}.${dateMatch.getUTCFullYear()}`}
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
