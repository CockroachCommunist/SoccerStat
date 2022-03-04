import React from "react";
import s from "./UtcDate.module.css";

export const UtcDate = ({ utcDate }: any) => {
    const dateMatch = new Date(utcDate);
    const date = () => {
      if (dateMatch.getUTCDate().toString().length === 1) {
        return `0${dateMatch.getUTCDate()}`;
      }
      return dateMatch.getUTCDate();
    };
    const mouth = () => {
      if (dateMatch.getUTCMonth().toString().length === 1) {
        return `0${dateMatch.getUTCMonth()}`;
      }
      return dateMatch.getUTCMonth();
    };
  
    return (
    <p className={s.date}>
      {`Начало: ${date()}.${mouth()}.${dateMatch.getUTCFullYear()}`}
    </p>
  );
};
