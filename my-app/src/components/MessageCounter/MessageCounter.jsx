import React from "react";
import styles from "./MessageCounter.module.scss";

export function MessageCounter({count}) {
  return (
    <h3 className={styles.counter}>Кол-во сообщений: <span className={styles.number}>{count}</span></h3>
  );
}