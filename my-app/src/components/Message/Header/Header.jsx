import React from "react";
import styles from "./Header.module.scss";
import defaultAvatar from "@images/defaultAvatar.png";

export function Header({avatarUrl = defaultAvatar, author, channel}) {
  return (
    <div className={styles.header}>
      <img className={styles.avatar} src={avatarUrl} alt="avatar"/>
      <div className={styles.info}>
        <p className={styles.author}>{author}</p>
        <p className={styles.channel}>{channel}</p>
      </div>
    </div>
  );
}