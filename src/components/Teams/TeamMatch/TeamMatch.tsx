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

  return (
    <>
      {pending && (
        <div className={s.loader}>
          <Loader />
        </div>
      )}
      {error && <div>Error</div>}
      {teamMatch &&
        teamMatch.map((match: any) => {
          return <div>{match.id}</div>;
        })}
    </>
  );
};
