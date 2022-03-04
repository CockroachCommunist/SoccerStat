import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./TeamMatch.module.css";

import { TeamBreadcrumbs } from "../../Breadcrumbs/TeamBreadcrumbs/TeamBreadcrumbs";
import { Loader } from "../../Loader/Loader";
import { Error } from "../../Error/Error";
import { UtcDate } from "./UtcDate/UtcDate";
import { StatusMatch } from "./StatusMatch/StatusMatch";
import { HomeTeam } from "./HomeTeam/HomeTeam";
import { AwayTeam } from "./AwayTeam/AwayTeam";

import { FetchTeamMatchRequest } from "../../../store/teamMatch/action";
import { RootState } from "../../../store/rootReducer";
import {
  getPending,
  getTeamMatch,
  getError,
} from "../../../store/teamMatch/selectors";

export const TeamMatch = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPending);
  const teamMatch = useSelector(getTeamMatch);
  const error = useSelector(getError);
  const id = useSelector((state: RootState) => state.teamMatchId.openId);

  useEffect(() => {
    dispatch(FetchTeamMatchRequest(id));
  }, []);

  return (
    <>
      <article className={s.breadcrumbs}>
        <TeamBreadcrumbs />
      </article>
      <h2 className={s.title}>Матчи</h2>
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
        {!!teamMatch.length &&
          teamMatch.map((match: any) => {
            return (
              <section
                className={pending ? s.loaderActive : s.section}
                key={match.id}
              >
                <div className={s.infoDateStatus}>
                  <UtcDate utcDate={match.utcDate} />
                  <StatusMatch status={match.status} />
                </div>
                <HomeTeam match={match} />
                <AwayTeam match={match} />
              </section>
            );
          })}
      </section>
    </>
  );
};
