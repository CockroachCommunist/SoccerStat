import React from "react";
import s from "./StatusMatch.module.css";

export const StatusMatch = ({ status }: any) => {
  return (
    <p className={status === "FINISHED" ? s.statusFinished : s.status}>
      {status === "SCHEDULED" && "Запланирован"}
      {status === "LIVE" && "Прямой эфир"}
      {status === "IN_PLAY" && "В игре"}
      {status === "PAUSED" && "Пауза"}
      {status === "FINISHED" && "Завершен"}
      {status === "POSTPONED" && "Отложен"}
      {status === "SUSPENDED" && "Приостановлен"}
      {status === "CANCELED" && "Отменен"}
    </p>
  );
};
